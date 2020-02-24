import { LightningElement, api } from 'lwc';

export default class Square extends LightningElement {  
    @api key= '';
    squareVal = '';
    @api
    get value(){
        return this.squareVal;
    } 
    set value(val) {
        this.squareVal = val;
    }
    @api position = '';
  
}
