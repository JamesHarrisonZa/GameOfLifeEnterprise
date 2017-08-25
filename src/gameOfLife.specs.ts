import { GameOfLife } from './gameOfLife';

describe('GameOfLife', () => {

	const gameOfLife = new GameOfLife();

	describe('Given a 2x2 grid', () => {

		describe('with all dead cells', () => {

			const startingCells =
				[
					[0, 0],
					[0, 0]
				];

			it('the next generation should not change', () => {

				const expectedResult =
					[
						[0, 0],
						[0, 0]
					];
				const nextGeneration = gameOfLife.getNextGeneration(startingCells);
				expect(nextGeneration).toEqual(expectedResult);
			});
		});

		describe('with all live cells', () => {

			const startingCells =
				[
					[1, 1],
					[1, 1]
				];

			it('the next generation should should not change', () => {

				const expectedResult =
					[
						[1, 1],
						[1, 1]
					];
				const nextGeneration = gameOfLife.getNextGeneration(startingCells);
				expect(nextGeneration).toEqual(expectedResult);
			});
		});

		describe('with a single live cell', () => {

			const startingCells =
				[
					[0, 0],
					[0, 1]
				];

			it('the next generation should kill the lonely cell :(', () => {

				const expectedResult =
					[
						[0, 0],
						[0, 0]
					];
				const nextGeneration = gameOfLife.getNextGeneration(startingCells);
				expect(nextGeneration).toEqual(expectedResult);
			});
		});

		describe('with a dead cell with 3 live neighbours', () => {

			const startingCells =
				[
					[1, 1],
					[1, 0]
				];

			it('the next generation should bring the dead cell to life', () => {

				const expectedResult =
					[
						[1, 1],
						[1, 1]
					];
				const nextGeneration = gameOfLife.getNextGeneration(startingCells);
				expect(nextGeneration).toEqual(expectedResult);
			});
		});
	});

	describe('Given a 3x3 grid', () => {

		describe('with all live cells', () => {

			const startingCells =
				[
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1]
				];

			it('the next generation should have a cross of dead cells', () => {

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

		describe('with a single live cell', () => {

			const startingCells =
				[
					[0, 0, 0],
					[0, 1, 0],
					[0, 0, 0]
				];

			it('the next generation should kill the lonely cell :(', () => {

				const expectedResult =
					[
						[0, 0, 0],
						[0, 0, 0],
						[0, 0, 0]
					];
				const nextGeneration = gameOfLife.getNextGeneration(startingCells);
				expect(nextGeneration).toEqual(expectedResult);
			});
		});

		describe('with 3 live cells', () => {

			const startingCells =
				[
					[1, 1, 1],
					[0, 0, 0],
					[0, 0, 0]
				];

			it('the next generation should bring the dead cell to life', () => {

				const expectedResult =
					[
						[0, 1, 0],
						[0, 1, 0],
						[0, 0, 0]
					];
				const nextGeneration = gameOfLife.getNextGeneration(startingCells);
				expect(nextGeneration).toEqual(expectedResult);
			});
		});
	});

});