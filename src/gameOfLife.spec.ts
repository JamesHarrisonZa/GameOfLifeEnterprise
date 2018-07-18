import { GameOfLife } from './gameOfLife';

describe('GameOfLife', () => {

	describe('when created', () => {

		describe('with a 3x3 grid', () => {

			describe('and all dead cells', () => {

				const startingCells =
					[
						[0, 0, 0],
						[0, 0, 0],
						[0, 0, 0]
					];

				it('the next generation should remain all dead', () => {

					const sut = new GameOfLife();
					const actual = sut.getNextGeneration(startingCells);
					const expected =
						[
							[0, 0, 0],
							[0, 0, 0],
							[0, 0, 0]
						];
					expect(actual).toEqual(expected);
				});
			});

			describe('and a single live cell', () => {

				const startingCells =
					[
						[0, 0, 0],
						[0, 1, 0],
						[0, 0, 0]
					];

				it('the next generation should kill the lonely cell :(', () => {

					const sut = new GameOfLife();
					const actual = sut.getNextGeneration(startingCells);
					const expected =
						[
							[0, 0, 0],
							[0, 0, 0],
							[0, 0, 0]
						];
					expect(actual).toEqual(expected);
				});
			});

			describe('and two dead cells with three live neighbours', () => {

				const startingCells =
					[
						[0, 0, 0],
						[1, 1, 1],
						[0, 0, 0]
					];

				it('the next generation should bring two cells to life', () => {

					const sut = new GameOfLife();
					const actual = sut.getNextGeneration(startingCells);
					const expected =
						[
							[0, 1, 0],
							[0, 1, 0],
							[0, 1, 0]
						];
					expect(actual).toEqual(expected);
				});
			});

			describe('and a live cell with two live neighbours', () => {

				const startingCells =
					[
						[1, 1, 1],
						[0, 0, 0],
						[0, 0, 0]
					];

				it('the next generation should keep that cell alive', () => {

					const sut = new GameOfLife();
					const actual = sut.getNextGeneration(startingCells);
					const expected =
						[
							[0, 1, 0],
							[0, 1, 0],
							[0, 0, 0]
						];
					expect(actual).toEqual(expected);
				});
			});

			describe('and a live cell with more than three neighbours', () => {

				const startingCells =
					[
						[1, 0, 1],
						[0, 1, 0],
						[1, 0, 1]
					];

				it('the next generation should kill that cell due to overcrowding', () => {

					const sut = new GameOfLife();
					const actual = sut.getNextGeneration(startingCells);
					const expected =
						[
							[0, 1, 0],
							[1, 0, 1],
							[0, 1, 0]
						];
					expect(actual).toEqual(expected);
				});
			});

			describe('and all live cells', () => {

				const startingCells =
					[
						[1, 1, 1],
						[1, 1, 1],
						[1, 1, 1]
					];

				it('the next generation should have a cross of dead cells', () => {

					const sut = new GameOfLife();
					const actual = sut.getNextGeneration(startingCells);
					const expected =
						[
							[1, 0, 1],
							[0, 0, 0],
							[1, 0, 1]
						];
					expect(actual).toEqual(expected);
				});
			});
		});
	});
});