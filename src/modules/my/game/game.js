import { LightningElement, track } from 'lwc';
import {calculateWinner} from './winnerLib';
export default class Game extends LightningElement {  
    // Initial Board State
    @track squares = [
        '','','',
        '','','',
        '','',''
    ];

    // automatic @track applicable on primitives
    isNextX = true; 
    status = 'Next player: X'; // Game starts with X by Defaults
    
    handleBoardSquareClick(event) {
        event.stopPropagation();
        let localSquares = this.squares.slice(); // or [...this.squares]
        if (calculateWinner(localSquares) 
            || localSquares[event.detail.position] !== '') {
            return;
        }
        localSquares[event.detail.position] = this.isNextX ? 'X' : 'O';
        this.isNextX = !this.isNextX;

        this.squares = [...localSquares];
        this.checkAndUpdateWinner();
    }

    checkAndUpdateWinner() {
        this.winner = calculateWinner(this.squares);
        if (this.winner) {
            this.status = "Winner: " + this.winner;
        } else {
            this.status = "Next player: " + (this.isNextX === true ? "X" : "O");
        }
    }
}