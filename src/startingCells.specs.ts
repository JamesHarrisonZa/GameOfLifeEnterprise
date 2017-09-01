import * as TypeMoq from 'typemoq';
import { StartingCells } from './startingCells';

describe('StartingCells', () => {

	describe('when created', () => {

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