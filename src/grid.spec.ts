import { Grid } from './grid';
import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';

describe('Grid', () => {

	const windowHeight = 1080;
	const windowWidth = 1920;
	const _document = window.document;

	const startingCells = new StartingCells(windowHeight, windowWidth);
	const gameOfLife = new GameOfLife();
	const grid = new Grid(startingCells, gameOfLife, _document);

	// beforeEach(() => {
	// 	var spiedFunction = spyOn(grid, 'createEmptyDivs').and.callThrough();
	// });

	//it should create empty divs

	describe('after creating empty divs', () => {

		describe('when updating the grid', () => {

			beforeEach(() => {
				spyOn(gameOfLife, 'getNextGeneration').and.callThrough();
				grid.update();
			});

			it('should get the next generation of the game of life', () => expect(gameOfLife.getNextGeneration).toHaveBeenCalledTimes(1));

			// it('should check if each cell needs updating ', () => );
		});
	});
});