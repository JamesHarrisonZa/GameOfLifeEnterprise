import { Grid } from './grid';
import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';

describe('Grid', () => {

	const _windowHeight = 1080;
	const _windowWidth = 1920;
	const _document = window.document;

	describe('when created', () => {

		let _startingCells: StartingCells;
		let _gameOfLife: GameOfLife;

		beforeEach(() => {
			_startingCells = new StartingCells(_windowHeight, _windowWidth);
			_gameOfLife = new GameOfLife();
		});

		it('should should the cell divs', () => {

			const spy = spyOn<any>(_document, 'createElement').and.callThrough();
			// tslint:disable-next-line:no-unused-expression
			new Grid(_startingCells, _gameOfLife, _document);
			expect(spy).toHaveBeenCalledTimes(190);
		});

		it('should append the grid div to the document', () => {

			const spy = spyOn<any>(_document.body, 'appendChild').and.callThrough();
			// tslint:disable-next-line:no-unused-expression
			new Grid(_startingCells, _gameOfLife, _document);
			expect(spy).toHaveBeenCalledTimes(1);
		});

		describe('when updating the grid', () => {

			it('should get the next generation of the game of life', () => {
				const sut = new Grid(_startingCells, _gameOfLife, _document);
				const spy = spyOn(_gameOfLife, 'getNextGeneration').and.callThrough();
				sut.update();
				expect(spy).toHaveBeenCalledTimes(1);
			});

			it('should check if each cell needs updating', () => {
				const sut = new Grid(_startingCells, _gameOfLife, _document);
				const spy = spyOn<any>(sut, 'cellNeedsUpdating').and.callThrough();
				sut.update();
				expect(spy).toHaveBeenCalledTimes(19928);
			});

			it('should update the first batch of live cells', () => {
				const sut = new Grid(_startingCells, _gameOfLife, _document);
				const spy = spyOn<any>(sut, 'setIsActiveTrue').and.callThrough();
				sut.update();
				expect(spy).toHaveBeenCalled();
			});

			it('should not update any dead cells', () => {
				const sut = new Grid(_startingCells, _gameOfLife, _document);
				const spy = spyOn<any>(sut, 'setIsActiveFalse').and.callThrough();
				sut.update();
				expect(spy).not.toHaveBeenCalled();
			});

			describe('when updating the grid more than once', () => {

				it('should update any new live cells', () => {
					const sut = new Grid(_startingCells, _gameOfLife, _document);
					const spy = spyOn<any>(sut, 'setIsActiveTrue').and.callThrough();
					sut.update();
					sut.update();
					expect(spy).toHaveBeenCalled();
				});

				it('should any new dead cells', () => {
					const sut = new Grid(_startingCells, _gameOfLife, _document);
					const spy = spyOn<any>(sut, 'setIsActiveFalse').and.callThrough();
					sut.update();
					sut.update();
					expect(spy).toHaveBeenCalled();
				});
			});
		});
	});
});