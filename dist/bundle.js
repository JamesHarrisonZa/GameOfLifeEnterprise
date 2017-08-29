require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"App":[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startingCells_1 = require("./startingCells");
const gameOfLife_1 = require("./gameOfLife");
const grid_1 = require("./grid");
const _refreshSeconds = 0.2;
const myGrid = new grid_1.Grid(new startingCells_1.StartingCells(), new gameOfLife_1.GameOfLife());
myGrid.CreateEmptyDivs();
window.setInterval(() => myGrid.UpdateGrid(), _refreshSeconds * 1000);

},{"./gameOfLife":1,"./grid":2,"./startingCells":3}],1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameOfLife {
    getNextGeneration(cells) {
        return cells.map((row, r) => {
            return row.map((isAlive, c) => {
                const neighbours = this.getCell(cells, r - 1, c - 1) + this.getCell(cells, r - 1, c) + this.getCell(cells, r - 1, c + 1) +
                    this.getCell(cells, r, c - 1) + this.getCell(cells, r, c + 1) +
                    this.getCell(cells, r + 1, c - 1) + this.getCell(cells, r + 1, c) + this.getCell(cells, r + 1, c + 1);
                return (neighbours === 3 || (neighbours === 2 && isAlive)) ? 1 : 0;
            });
        });
    }
    getCell(cells, row, col) {
        return (cells[row] && cells[row][col]) ? 1 : 0;
    }
}
exports.GameOfLife = GameOfLife;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grid {
    constructor(startingCells, gameOfLife) {
        this._gridHeight = startingCells.CellsHeight;
        this._gridWidth = startingCells.CellsWidth;
        this._cells = startingCells.Cells;
        this._gameOfLife = gameOfLife;
    }
    CreateEmptyDivs() {
        //Create row with x columns
        for (let x = 0; x < this._gridWidth; x++) {
            const colDiv = window.document.createElement('div');
            colDiv.classList.add('inactive');
            window.document.querySelector('.row').appendChild(colDiv);
        }
        //duplicate y times. -1 because we started with 1 row
        for (let y = 0; y < this._gridHeight - 1; y++) {
            this.DuplicateRow();
        }
    }
    UpdateGrid() {
        this._cells = this._gameOfLife.getNextGeneration(this._cells);
        const allRows = document.querySelectorAll('.row');
        for (let y = 0; y < this._gridHeight; y++) {
            const rowDiv = allRows[y];
            for (let x = 0; x < this._gridWidth; x++) {
                const colDiv = rowDiv.childNodes[x];
                const cell = this._cells[y][x];
                if (this.CellNeedsUpdating(colDiv, cell)) {
                    this.SetIsActive(colDiv, cell);
                }
            }
        }
    }
    DuplicateRow() {
        const allRows = document.querySelectorAll('.row');
        const lastRow = allRows[allRows.length - 1];
        const clone = lastRow.cloneNode(true);
        document
            .querySelector('.grid')
            .appendChild(clone);
    }
    CellNeedsUpdating(colDiv, cell) {
        return (colDiv.classList[0] === 'inactive' && cell === 1) || (colDiv.classList[0] === 'active' && cell === 0);
    }
    SetIsActive(cellDiv, isActive) {
        if (!!isActive) {
            cellDiv.classList.remove('inactive'); //, 'animated', 'fadeOut'
            cellDiv.classList.add('active'); //, 'animated', 'fadeIn'
        }
        else {
            cellDiv.classList.remove('active');
            cellDiv.classList.add('inactive');
        }
    }
}
exports.Grid = Grid;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StartingCells {
    constructor() {
        this._fillPercentage = 40; //Disable animations if you want to fill more
        this.getCellsWidth = () => {
            const windowMargin = 5;
            const viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            return this.getCellUnits(viewPortWidth) - windowMargin;
        };
        this.CellsHeight = this.getCellsHeight();
        this.CellsWidth = this.getCellsWidth();
        this.Cells = this.getStartingCells(this.CellsHeight, this.CellsWidth);
    }
    getCellsHeight() {
        const viewPortHeigth = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return this.getCellUnits(viewPortHeigth);
    }
    getStartingCells(gridHeight, gridWidth) {
        const cells = new Array(gridHeight)
            .fill(null) //Cant apply map on undefined elements, need to set to null first
            .map((_, y) => new Array(gridWidth)
            .fill(null)
            .map((__, x) => {
            return this.isInAreaToRandomise(gridHeight, gridWidth, y, x) ? this.randomBinary() : 0;
        }));
        return cells;
    }
    getCellUnits(viewPortSize) {
        const cellDimension = 10;
        const cellMargin = 2;
        return Math.floor(viewPortSize / cellDimension) - cellMargin;
    }
    isInAreaToRandomise(gridHeight, gridWidth, y, x) {
        return y < gridHeight * this._fillPercentage / 100 && x < gridWidth * this._fillPercentage / 100;
    }
    randomBinary() {
        const max = 1;
        const min = 0;
        return Math.floor(Math.random() * (max - min + 1));
    }
}
exports.StartingCells = StartingCells;

},{}]},{},[]);
