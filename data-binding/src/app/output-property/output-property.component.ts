import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'contador',
    templateUrl: './output-property.component.html',
    styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
    @Input() valor: number = 0;
    @Output() mudouValor = new EventEmitter();
    incremeta(){
        this.valor++;
        this.mudouValor.emit({novoValor: this.valor})
    }
    decrementa(){
        if (this.valor <= 0){
            alert('Limite mínimo é 0');
            this.mudouValor.emit({novoValor: this.valor})
        } else {
            this.valor--;
        }

    }

    constructor() {

    }

    ngOnInit() {
    }

}
