import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Rafael";
  dataNascimento = "1995-01-01";
  urlImagem = "../../assets/_CC_2285_AVATAR.jpg";

  mostrarDataNascimento() {
    alert(`A data de nascimento de Rafael é ${this.dataNascimento}`);
  }
}

