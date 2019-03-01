import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-busca',
    templateUrl: './busca.page.html',
    styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {
    nome: string = '';
    livros: any;
    livrosFiltrados: any;

    constructor(public navCtrl: NavController) {
        this.livros = [
            {id: 1, nome: 'Livro Um'},
            {id: 2, nome: 'Livro Dois'},
            {id: 3, nome: 'Livro Tres'},
            {id: 4, nome: 'Livro Quatro'},
            {id: 5, nome: 'Livro Cinco'}
        ];
        this.livrosFiltrados = this.livros;
    }

    ngOnInit() {
    }

    filtrarItens() {
        this.livrosFiltrados = this.filtrarLivros(this.nome);
    }

    filtrarLivros(nome) {
        this.livrosFiltrados = this.livros;

        return this.livrosFiltrados.filter((item) => {
            return item.nome.toLowerCase().includes(nome.toLowerCase());
        });
    }
}
