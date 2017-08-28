import { StartingCells } from './startingCells';
import { Grid } from './grid';

class App {

	private _refreshSeconds = 0.2;

	public Initialize(): void {

		const myGrid = new Grid(new StartingCells());
		myGrid.CreateEmptyDivs();
		window.setInterval(myGrid.UpdateGrid, this._refreshSeconds * 1000);
	}
}

const app = new App();
app.Initialize();