class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.current = 'x';
        this.turnsLeft = 9;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.turnsLeft % 2 == 0 ? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {
        while (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.current;
            this.turnsLeft--;
            this.current = this.getCurrentPlayerSymbol();
        }
        this.current = this.getCurrentPlayerSymbol();
    }

    isFinished() {
        let str = '';
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                str += (this.field[row][col] == null) ? '0' : this.field[row][col];
            }
        }
        return (this.getWinner() || !str.includes('0')) ? true : false;
    }

    getWinner() {
        let rowArr = [],
            colArr = [];

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                rowArr += (this.field[row][col] == null) ? '0' : this.field[row][col];
                colArr += (this.field[col][row] == null) ? '0' : this.field[col][row];
            }
        }
        let diaComboL = rowArr.slice(0, 1) + rowArr.slice(4, 5) + rowArr.slice(8);
        let diaComboR = rowArr.slice(2, 3) + rowArr.slice(4, 5) + rowArr.slice(6, 7);

        switch ('xxx') {
            case `${rowArr.slice(0,3)}`:
            case `${rowArr.slice(3,6)}`:
            case `${rowArr.slice(6,9)}`:
            case `${colArr.slice(0,3)}`:
            case `${colArr.slice(3,6)}`:
            case `${colArr.slice(6,9)}`:
            case diaComboL:
            case diaComboR:
                this.winner = 'x';
                break;
        }

        switch ('ooo') {
            case `${rowArr.slice(0,3)}`:
            case `${rowArr.slice(3,6)}`:
            case `${rowArr.slice(6,9)}`:
            case `${colArr.slice(0,3)}`:
            case `${colArr.slice(3,6)}`:
            case `${colArr.slice(6,9)}`:
            case diaComboL:
            case diaComboR:
                this.winner = 'o';
                break;
        }

        return this.winner;

    }

    noMoreTurns() {
        this.turnsLeft = this.field.join()
            .split(',')
            .filter(item => item == "").length;
        return (this.turnsLeft) ? false : true;
    }

    isDraw() {
        return (this.getWinner() || !this.isFinished()) ? false : true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;