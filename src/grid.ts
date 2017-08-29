import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';

export class Grid {

	private _gridHeight: number;
	private _gridWidth: number;
	private _cells: ReadonlyArray<ReadonlyArray<number>>;
	private _gameOfLife: GameOfLife;

	constructor(startingCells: StartingCells, gameOfLife: GameOfLife) {

		this._gridHeight = startingCells.CellsHeight;
		this._gridWidth = startingCells.CellsWidth;
		this._cells = startingCells.Cells;
		this._gameOfLife = gameOfLife;
	}

	public CreateEmptyDivs(): void {

		//Create row with x columns
		for (let x = 0; x < this._gridWidth; x++) {
			const colDiv = window.document.createElement('div');
			colDiv.classList.add('inactive');
			window.document.querySelector('.row').appendChild(colDiv);
		}

		//duplicate y times. -1 because we started with 1 row
		for (let y = 0; y < this._gridHeight - 1; y++) {
			this.DuplicateRow();
		}
	}

	public UpdateGrid(): void {

		this._cells = this._gameOfLife.getNextGeneration(this._cells);
		const allRows = document.querySelectorAll('.row');

		for (let y = 0; y < this._gridHeight; y++) {

			const rowDiv = allRows[y];

			for (let x = 0; x < this._gridWidth; x++) {

				const colDiv = rowDiv.childNodes[x] as HTMLDivElement;
				const cell = this._cells[y][x];

				if (this.CellNeedsUpdating(colDiv, cell)) {
					this.SetIsActive(colDiv, cell);
				}
			}
		}
	}

	private DuplicateRow(): void {
		const allRows = document.querySelectorAll('.row');
		const lastRow = allRows[allRows.length - 1];
		const clone = lastRow.cloneNode(true);
		document
			.querySelector('.grid')
			.appendChild(clone);
	}

	private CellNeedsUpdating(colDiv: HTMLDivElement, cell: number): boolean {

		return (colDiv.classList[0] === 'inactive' && cell === 1) || (colDiv.classList[0] === 'active' && cell === 0);
	}

	private SetIsActive(cellDiv: HTMLDivElement, isActive: number): void {
		if (!!isActive) {
			cellDiv.classList.remove('inactive'); //, 'animated', 'fadeOut'
			cellDiv.classList.add('active'); //, 'animated', 'fadeIn'
		} else {
			cellDiv.classList.remove('active');
			cellDiv.classList.add('inactive');
		}
	}
}