import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';
import { Grid } from './grid';

const _refreshSeconds = 0.2;
const myGrid = new Grid(new StartingCells(window), new GameOfLife());

myGrid.CreateEmptyDivs();
window.setInterval(() => myGrid.UpdateGrid(), _refreshSeconds * 1000);