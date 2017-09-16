import { GameOfLife } from './gameOfLife';

describe('GameOfLife', () => {

	const gameOfLife = new GameOfLife();

	describe('Given a 3x3 grid', () => {

		describe('with all dead cells', () => {

			const startingCells =
				[
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0]
				];

			it('the next generation should remain all dead', () => {

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

		describe('with two dead cells with three live neighbours', () => {

			const startingCells =
				[
					[0, 0, 0],
					[1, 1, 1],
					[0, 0, 0]
				];

			it('the next generation should bring two cells to life', () => {

				const expectedResult =
					[
						[0, 1, 0],
						[0, 1, 0],
						[0, 1, 0]
					];
				const nextGeneration = gameOfLife.getNextGeneration(startingCells);
				expect(nextGeneration).toEqual(expectedResult);
			});
		});

		describe('with a live cell with two live neighbours', () => {

			const startingCells =
				[
					[1, 1, 1],
					[0, 0, 0],
					[0, 0, 0]
				];

			it('the next generation should keep that cell alive', () => {

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

		describe('with a live cell with more than three neighbours', () => {

			const startingCells =
				[
					[1, 0, 1],
					[0, 1, 0],
					[1, 0, 1]
				];

			it('the next generation should kill that cell due to overcrowding', () => {

				const expectedResult =
					[
						[0, 1, 0],
						[1, 0, 1],
						[0, 1, 0]
					];
				const nextGeneration = gameOfLife.getNextGeneration(startingCells);
				expect(nextGeneration).toEqual(expectedResult);
			});
		});

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
	});
});