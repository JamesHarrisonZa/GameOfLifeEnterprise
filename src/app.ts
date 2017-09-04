import { StartingCells } from './startingCells';
import { GameOfLife } from './gameOfLife';
import { Grid } from './grid';

const _refreshSeconds = 0.2;

const windowHeight = Math.max(window.document.documentElement.clientHeight, window.innerHeight);
const windowWidth = Math.max(window.document.documentElement.clientWidth, window.innerWidth);
const myGrid = new Grid(new StartingCells(windowHeight, windowWidth), new GameOfLife(), window.document);

myGrid.CreateEmptyDivs();
window.setInterval(() => myGrid.UpdateGrid(), _refreshSeconds * 1000);