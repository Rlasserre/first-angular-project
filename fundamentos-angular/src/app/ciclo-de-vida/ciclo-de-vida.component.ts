import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit {

  horario = new Date();
  timer: any = null!;

  ngOnInit(): void {

    console.log("O evento onInit disparou.");
    this.timer = setInterval(() => this.horario = new Date(), 1000);

  }

}
