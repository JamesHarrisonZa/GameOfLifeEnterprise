import { StartingCells } from './startingCells';

describe('StartingCells', () => {

	describe('when created', () => {

		const startingCells = new StartingCells(1080, 1920);

		it('should have a CellsHeight', () => expect(startingCells.CellsHeight).toBe(106));

		it('should have a CellsWidth', () => expect(startingCells.CellsWidth).toBe(188));

		it('should have Cells', () => expect(startingCells.Cells).toBeDefined());

		describe('Cells', () => {

			it('should have matching height', () => expect(startingCells.Cells.length).toBe(106));

			it('should have matching width', () => expect(startingCells.Cells[0].length).toBe(188));

			//ToDo: should have mixture of ones and zeros
		});
	});
});