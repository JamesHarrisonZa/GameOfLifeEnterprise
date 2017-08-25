import { GameOfLife } from './gameOfLife';

describe('GameOfLife', () => {

	const gameOfLife = new GameOfLife();

	describe('Given a 2x2 grid with all dead cells', () => {

		const startingCells =
			[
				[0, 0],
				[0, 0]
			];

		it('The next generation should not change', () => {

			const expectedResult =
				[
					[0, 0],
					[0, 0]
				];
			const nextGeneration = gameOfLife.getNextGeneration(startingCells);
			expect(nextGeneration).toEqual(expectedResult);
		});
	});

	describe('Given a 2x2 grid with all live cells', () => {

		const startingCells =
			[
				[1, 1],
				[1, 1]
			];

		it('The next generation should should not change', () => {

			const expectedResult =
				[
					[1, 1],
					[1, 1]
				];
			const nextGeneration = gameOfLife.getNextGeneration(startingCells);
			expect(nextGeneration).toEqual(expectedResult);
		});
	});

	describe('Given a 2x2 grid with 3 live cells', () => {

		const startingCells =
			[
				[1, 1],
				[1, 0]
			];

		it('The next generation should be all live cells', () => {

			const expectedResult =
				[
					[1, 1],
					[1, 1]
				];
			const nextGeneration = gameOfLife.getNextGeneration(startingCells);
			expect(nextGeneration).toEqual(expectedResult);
		});
	});

	describe('Given a 3x3 grid with all live cells', () => {

		const startingCells =
			[
				[1, 1, 1],
				[1, 1, 1],
				[1, 1, 1]
			];

		it('The next generation should be a cross of dead cells', () => {

			const expectedResult =
				[
					[1, 0, 1],
					[0, 0, 0],
					[1, 0, 1]
				];
			const nextGeneration = gameOfLife.getNextGeneration(startingCells);
			expect(nextGeneration).toEqual(expectedResult);
		});
	});
});