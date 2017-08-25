import { StartingCells } from './startingCells';

export class Grid {

	private _gridHeight: number;
	private _gridWidth: number;
	private _cells: ReadonlyArray<ReadonlyArray<number>>;

	constructor(startingCells: StartingCells) {

		this._gridHeight = startingCells.CellsHeight;
		this._gridWidth = startingCells.CellsWidth;
		this._cells = startingCells.Cells;
		//this._gameOfLife = new gameOfLife();
	}
}