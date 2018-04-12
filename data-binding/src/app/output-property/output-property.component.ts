import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'contador',
    templateUrl: './output-property.component.html',
    styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
    @Input() valor: number = 0;
    @Output() mudouValor = new EventEmitter();

    @ViewChild('campoInput') campoValorInput: ElementRef;
    incremeta(){
        console.log();
        this.campoValorInput.nativeElement.value++;
        this.mudouValor.emit({novoValor: this.valor})
    }
    decrementa(){
        if (this.valor <= 0){
            alert('Limite mínimo é 0');
            this.mudouValor.emit({novoValor: this.valor})
        } else {
            this.campoValorInput.nativeElement.value--;
        }

    }

    constructor() {

    }

    ngOnInit() {
    }

}
