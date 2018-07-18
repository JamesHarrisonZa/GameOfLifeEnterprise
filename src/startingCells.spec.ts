import { StartingCells } from './startingCells';

describe('StartingCells', () => {

	const _windowHeight = 1080;
	const _windowWidth = 1920;

	describe('when created', () => {

		//const startingCells = new StartingCells(_windowHeight, _windowWidth);

		it('should have a relative CellsHeight', () => {
			const sut = new StartingCells(_windowHeight, _windowWidth);
			const actual = sut.CellsHeight;
			const expected = 106;
			expect(actual).toBe(expected);
		});

		it('should have a relative CellsWidth', () => {
			const sut = new StartingCells(_windowHeight, _windowWidth);
			const actual = sut.CellsWidth;
			const expected = 188;
			expect(actual).toBe(expected);
		});

		it('should have Cells', () => {
			const sut = new StartingCells(_windowHeight, _windowWidth);
			expect(sut.Cells).toBeDefined();
		});

		describe('Cells', () => {

			it('should have matching height', () => {
				const sut = new StartingCells(_windowHeight, _windowWidth);
				const actual = sut.Cells.length;
				const expected = 106;
				expect(actual).toBe(expected);
			});

			it('should have matching width', () => {
				const sut = new StartingCells(_windowHeight, _windowWidth);
				const actual = sut.Cells[0].length;
				const expected = 188;
				expect(actual).toBe(expected);
			});

			describe('should have mixture of', () => {

				it('ones', () => {
					const sut = new StartingCells(_windowHeight, _windowWidth);
					const actual = sut.Cells[0].some((cellValue) => cellValue === 1); //very very rare case of failure due to randomness
					const expected = true;
					expect(actual).toBe(expected);
				});

				it('zeros', () => {
					const sut = new StartingCells(_windowHeight, _windowWidth);
					const actual = sut.Cells[0].some((cellValue) => cellValue === 0); //very very rare case of failure due to randomness
					const expected = true;
					expect(actual).toBe(expected);
				});
			});
		});
	});
});