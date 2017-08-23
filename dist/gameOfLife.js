"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameOfLife = (function () {
    function GameOfLife() {
    }
    GameOfLife.prototype.getNextGeneration = function (cells) {
        var _this = this;
        return cells.map(function (row, r) {
            return row.map(function (isAlive, c) {
                var neighbours = _this.getCell(cells, r - 1, c - 1) + _this.getCell(cells, r - 1, c) + _this.getCell(cells, r - 1, c + 1) +
                    _this.getCell(cells, r, c - 1) + _this.getCell(cells, r, c + 1) +
                    _this.getCell(cells, r + 1, c - 1) + _this.getCell(cells, r + 1, c) + _this.getCell(cells, r + 1, c + 1);
                return (neighbours === 3 || (neighbours === 2 && isAlive)) ? 1 : 0;
            });
        });
    };
    GameOfLife.prototype.getCell = function (cells, row, col) {
        return (cells[row] && cells[row][col]) | 0;
    };
    return GameOfLife;
}());
exports.GameOfLife = GameOfLife;
//# sourceMappingURL=gameOfLife.js.map