export class GameOfLife {

	public getNextGeneration(cells: ReadonlyArray<ReadonlyArray<number>>): ReadonlyArray<ReadonlyArray<number>> {

		return cells.map((row, r) => {
			return row.map((isAlive, c) => {

				const neighbours =
					this.getCell(cells, r - 1, c - 1) + this.getCell(cells, r - 1, c) + this.getCell(cells, r - 1, c + 1) +
					this.getCell(cells, r, c - 1) 								      + this.getCell(cells, r, c + 1) +
					this.getCell(cells, r + 1, c - 1) + this.getCell(cells, r + 1, c) + this.getCell(cells, r + 1, c + 1);

				return (neighbours === 3 || (neighbours === 2 && isAlive)) ? 1 : 0;
			});
		});
	}

	private getCell(cells: ReadonlyArray<ReadonlyArray<number>>, row: number, col: number): number {

		return (cells[row] && cells[row][col]) ? 1 : 0;
	}
}