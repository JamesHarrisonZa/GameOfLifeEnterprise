import * as TypeMoq from 'typemoq';
import { Grid } from './grid';
import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';

describe('Grid', () => {

	const windowHeight = 1080;
	const windowWidth = 1920;
	const documentMock = TypeMoq.Mock.ofType<Document>();
	const documentElementMock = TypeMoq.Mock.ofType<HTMLElement>();
	documentElementMock.setup(p => p.clientHeight).returns(() => 1080);
	documentElementMock.setup(p => p.clientWidth).returns(() => 1920);
	documentMock.setup(p => p.documentElement).returns(() => documentElementMock.object);

	const startingCells = new StartingCells(windowHeight, windowWidth);
	const gameOfLife = new GameOfLife();
	const grid = new Grid(startingCells, gameOfLife, documentMock.object);

	describe('when updating the grid', () => {

		it('should be defined', () => expect(grid).toBeDefined());

		// it('should get the next generation of the game of life', () => {

		// });

		// it('should check if each cell needs updating ', () => {

		// });
	});
});