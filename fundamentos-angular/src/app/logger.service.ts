import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mensagens: string[] = [];

  logar(mensagem: string) {
    console.log(mensagem);
    this.mensagens.push(mensagem);
  }

  listarLogs() {
    console.log(this.mensagens);

  }
}
