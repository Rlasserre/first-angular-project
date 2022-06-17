import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {

  descricao = "";

  adicionarProduto() {
    console.log(`O produto ${this.descricao} foi adicionado`);
  }
}
