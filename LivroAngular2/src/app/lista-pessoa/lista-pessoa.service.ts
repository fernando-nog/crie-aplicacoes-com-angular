import { Injectable } from '@angular/core';

@Injectable()
export class ListaPessoaService {

  nomesPessoas: string [] = [];

  constructor() { }

  getPessoas(): string [] {
    return this.nomesPessoas;
  }

  setPessoa(nome: string): void {
    this.nomesPessoas.push(nome);
  }
}
