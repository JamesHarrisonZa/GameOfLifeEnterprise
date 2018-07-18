import { App } from './app';

describe('App', () => {

	describe('when created', () => {

		it('should have a Grid', () => {
			const sut = new App(window);
			const actual = sut.grid;
			expect(actual).toBeDefined();
		});
	});
});