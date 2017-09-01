import * as TypeMoq from 'typemoq';
import { Grid } from './grid';
import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';

describe('Grid', () => {

	const windowMock = TypeMoq.Mock.ofType<Window>();
	const documentMock = TypeMoq.Mock.ofType<Document>();
	const documentElementMock = TypeMoq.Mock.ofType<HTMLElement>();

	documentElementMock.setup(p => p.clientHeight).returns(() => 1080);
	documentElementMock.setup(p => p.clientWidth).returns(() => 1920);
	documentMock.setup(p => p.documentElement).returns(() => documentElementMock.object);
	windowMock.setup(p => p.document).returns(() => documentMock.object);
	windowMock.setup(p => p.innerHeight).returns(() => 1080);
	windowMock.setup(p => p.innerWidth).returns(() => 1920);

	const startingCells = new StartingCells(windowMock.object);
	const gameOfLife = new GameOfLife();
	const grid = new Grid(startingCells, gameOfLife, windowMock.object);

	describe('when updating the grid', () => {

		it('should be defined', () => expect(grid).toBeDefined());

		// it('should get the next generation of the game of life', () => {

		// });

		// it('should check if each cell needs updating ', () => {

		// });
	});
});