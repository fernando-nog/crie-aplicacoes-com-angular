import { Component, OnInit } from '@angular/core';

import { ListaPessoaService } from './lista-pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [ListaPessoaService]
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string [];
  nome: string = "Thiago";

  constructor(private service:ListaPessoaService) { 
    this.pessoas = service.getPessoas();
  }

  ngOnInit() {
  }

  enviarNome() {
    this.service.setPessoa(this.nome);
  }
}
