import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'desafio';

  private _direitas = ['Ken', 'Guga', 'Victin', 'Jojo', 'Teixeira'];
  private _esquerdas = ['Caio', 'Lemos', 'Alan', 'Billeta', 'Matheus'];

  public participantesDireita = [...this._direitas];
  public participantesEsquerda = [...this._esquerdas];

  private _choosedDireita = '';
  private _choosedEsquerda = '';

  public duplasSorteadas = [];

  public raffle() {
    for (let i = 1; i <= 5; i++) {
      this._choosedDireita =
        this._direitas[Math.floor(Math.random() * this._direitas.length)];
      this._choosedEsquerda =
        this._esquerdas[Math.floor(Math.random() * this._esquerdas.length)];

      console.log(
        `Dupla ${i} - ${this._choosedDireita} e ${this._choosedEsquerda}`
      );

      this.duplasSorteadas.push(
        `Dupla ${i} - ${this._choosedDireita} e ${this._choosedEsquerda}`
      );

      const indexDireitaToBeRemoved = this._direitas.indexOf(
        this._choosedDireita
      );
      const indexEsquerdaToBeRemoved = this._esquerdas.indexOf(
        this._choosedEsquerda
      );

      this._direitas.splice(indexDireitaToBeRemoved, 1);
      this._esquerdas.splice(indexEsquerdaToBeRemoved, 1);
    }
  }
}
