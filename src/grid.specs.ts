import * as TypeMoq from 'typemoq';
import { Grid } from './grid';
import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';

describe('Grid', () => {

	const windowHeight = 1080;
	const windowWidth = 1920;
	const documentMock = TypeMoq.Mock.ofType<Document>();

	//mocking document.querySelectorAll('.row');
	//const row = new NodeListOf<Element>();
	//documentMock.setup(p => p.querySelector).returns(() => );

	const startingCells = new StartingCells(windowHeight, windowWidth);
	const gameOfLife = new GameOfLife();
	const grid = new Grid(startingCells, gameOfLife, documentMock.object);

	describe('when updating the grid', () => {

		// beforeEach(() => {
		// 	spyOn(gameOfLife, 'getNextGeneration');
		// 	grid.UpdateGrid();
		// });

		it('should be defined', () => expect(grid).toBeDefined());

		// it('should get the next generation of the game of life', () => {
		// 	expect(gameOfLife.getNextGeneration).toHaveBeenCalledTimes(1);
		// });

		// it('should check if each cell needs updating ', () => {

		// });
	});
});