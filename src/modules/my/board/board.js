import { LightningElement, api, track } from 'lwc';

export default class Board extends LightningElement {
    @track
    _squares = [];

    @api
    get squares() {
        return this._squares;
    }
    set squares(val) {
        let i = 0;
        this._squares = [];
        val.forEach(square => {
            this._squares.push({ key: i, value: square });
            i++;
        });
    }
    handleSquareClick(e) {
        e.preventDefault();
        e.stopPropagation();

        const boardSquareClickEvent = new CustomEvent('boardsquareclick', {
            cancelable: false,
            composed: true,
            bubbles: true,
            detail: {
                position: e.target.position,
                value: e.target.value
            }
        });
        this.dispatchEvent(boardSquareClickEvent);
    }
}
