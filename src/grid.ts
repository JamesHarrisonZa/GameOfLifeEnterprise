import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';

export class Grid {

	private _gridHeight: number;
	private _gridWidth: number;
	private _cells: ReadonlyArray<ReadonlyArray<number>>;
	private _gameOfLife: GameOfLife;
	private _gridDiv: HTMLDivElement;

	constructor(startingCells: StartingCells, gameOfLife: GameOfLife, document: Document) {

		this._gridHeight = startingCells.CellsHeight;
		this._gridWidth = startingCells.CellsWidth;
		this._cells = startingCells.Cells;
		this._gameOfLife = gameOfLife;
		this._gridDiv = this.createEmptyDivs(document);
	}

	public updateGrid(): void {

		this._cells = this._gameOfLife.getNextGeneration(this._cells);
		const allRows = this._gridDiv.querySelectorAll('.row');

		for (let y = 0; y < this._gridHeight; y++) {

			const rowDiv = allRows[y];

			for (let x = 0; x < this._gridWidth; x++) {

				const colDiv = rowDiv.childNodes[x] as HTMLDivElement;
				const cell = this._cells[y][x];

				if (this.cellNeedsUpdating(colDiv, cell)) {
					this.setIsActive(colDiv, cell);
				}
			}
		}
	}

	private createEmptyDivs(document: Document): HTMLDivElement {

		//Create grid
		const gridDiv = document.createElement('div');
		gridDiv.classList.add('grid');

		//Create single row
		const rowDiv = document.createElement('div');
		rowDiv.classList.add('row');

		//Create row with x columns
		for (let x = 0; x < this._gridWidth; x++) {
			const colDiv = document.createElement('div');
			colDiv.classList.add('inactive');
			rowDiv.appendChild(colDiv);
		}

		gridDiv.appendChild(rowDiv);

		//duplicate y times. -1 because we started with 1 row
		for (let y = 0; y < this._gridHeight - 1; y++) {
			this.duplicateRow(gridDiv, rowDiv);
		}

		document.body.appendChild(gridDiv);
		return gridDiv;
	}

	private duplicateRow(gridDiv: HTMLDivElement, rowDiv: HTMLDivElement): void {

		const clone = rowDiv.cloneNode(true);
		gridDiv.appendChild(clone);
	}

	private cellNeedsUpdating(colDiv: HTMLDivElement, cell: number): boolean {

		return (colDiv.classList[0] === 'inactive' && cell === 1) || (colDiv.classList[0] === 'active' && cell === 0);
	}

	private setIsActive(cellDiv: HTMLDivElement, isActive: number): void {
		if (!!isActive) {
			cellDiv.classList.remove('inactive'); //, 'animated', 'fadeOut'
			cellDiv.classList.add('active'); //, 'animated', 'fadeIn'
		} else {
			cellDiv.classList.remove('active');
			cellDiv.classList.add('inactive');
		}
	}
}