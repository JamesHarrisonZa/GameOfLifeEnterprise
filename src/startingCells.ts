export class StartingCells {

	public CellsHeight: number;
	public CellsWidth: number;
	public Cells: ReadonlyArray<ReadonlyArray<number>>;
	private _fillPercentage = 40; //Disable animations if you want to fill more

	constructor(window: Window) {

		this.CellsHeight = this.getCellsHeight(window);
		this.CellsWidth = this.getCellsWidth(window);
		this.Cells = this.getStartingCells(this.CellsHeight, this.CellsWidth);
	}

	private getCellsHeight(window: Window): number {

		const viewPortHeigth = Math.max(window.document.documentElement.clientHeight, window.innerHeight || 0);
		return this.getCellUnits(viewPortHeigth);
	}

	private getCellsWidth = (window: Window) => {

		const windowMargin = 2;
		const viewPortWidth = Math.max(window.document.documentElement.clientWidth, window.innerWidth || 0);
		return this.getCellUnits(viewPortWidth) - windowMargin;
	}

	private getStartingCells(gridHeight: number, gridWidth: number): ReadonlyArray<ReadonlyArray<number>> {

		const cells = new Array<number>(gridHeight)
			.fill(null) //Cant apply map on undefined elements, need to set to null first
			.map((_, y) => new Array<number>(gridWidth)
				.fill(null)
				.map((__, x) => {
					return this.isInAreaToRandomise(gridHeight, gridWidth, y, x) ? this.randomBinary() : 0;
				})
			);

		return cells;
	}

	private getCellUnits(viewPortSize: number):number {

		const cellDimension = 10;
		const cellMargin = 2;
		return Math.floor(viewPortSize / cellDimension) - cellMargin;
	}

	private isInAreaToRandomise(gridHeight: number, gridWidth: number, y: number, x: number): boolean {

		return y < gridHeight * this._fillPercentage / 100 && x < gridWidth * this._fillPercentage / 100;
	}

	private randomBinary(): number {

		const max = 1;
		const min = 0;
		return Math.floor(Math.random() * (max - min + 1));
	}
}