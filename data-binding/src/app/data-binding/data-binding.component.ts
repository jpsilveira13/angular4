import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    //styleUrls: ['./data-binding.component.css']
    styles: [
            `
            .highlight{
                background-color: yellow;
                font-weight:bold;
            }
        `
    ]
})
export class DataBindingComponent implements OnInit {

    url: string = 'https://www.sortesim.com.br';
    cursoAngular: boolean = true;
    urlImagem: string = 'http://lorempixel.com/400/200/nature/';
    valorAtual: string = '';
    valorSalvo: string = '';
    nome: string = 'ABC';
    nomeDocurso: string = 'Angular';
    isMouseOver: boolean = false;
    getValor(){
        return 1;
    }

    getCurtirCurso(){
        return true;
    }
    botaoClicado(){
        alert('cliquei');
    }
    onKeyUp(evento: KeyboardEvent){
        this.valorAtual = ((<HTMLInputElement>evento.target).value);
    }
    onMouseOverOut(){
        this.isMouseOver = !this.isMouseOver;
    }
    salvarValor(valor){
        this.valorSalvo = valor;
    }
    constructor() { }

    ngOnInit() {
    }

}
