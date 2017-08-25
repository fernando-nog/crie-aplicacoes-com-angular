import { TestBed, inject } from '@angular/core/testing';

import { ListaPessoaService } from './lista-pessoa.service';

describe('ListaPessoaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaPessoaService]
    });
  });

  it('should be created', inject([ListaPessoaService], (service: ListaPessoaService) => {
    expect(service).toBeTruthy();
  }));
});
