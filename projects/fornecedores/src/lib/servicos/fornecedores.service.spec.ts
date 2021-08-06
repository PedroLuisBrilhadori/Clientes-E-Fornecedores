import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';


import { Fornecedor } from '../modelo/fornecedor';
import { FornecedorService } from "./fornecedores.service"



describe('#carregar Fornecedores', () => {
    let expectedFornecedores: Fornecedor[]

    beforeEach(() => {
        // fornecedorService = TestBed.inject(FornecedorService);
        expectedFornecedores = [
            {id: 1, nome: 'Carlos', endereco: 'R. Sim', cnpj: '4587265-8', fornecedorDesde: 2018, cargo: 'Fornecedor'},
            {id: 2, nome: 'Carla', endereco: 'R. Não', cnpj: '4584566-8', fornecedorDesde: 2015, cargo: 'Fornecedor'},
            {id: 3, nome: 'Eduardo', endereco: 'R. Talvez', cnpj: '4123568-9', fornecedorDesde: 2020, cargo: 'Fornecedor'},
            {id: 4, nome: 'Sebastião', endereco: 'R. Quase', cnpj: '9856568-4', fornecedorDesde: 2010, cargo: 'Fornecedor'},
        ]
    })


})

// describe('FornecedoresService (with spyies) ', () => {
//     let httpClientSpy: { get: jasmine.Spy}
//     let fornecedorService: FornecedorService;

    
//     beforeEach(() => {
//         httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//         fornecedorService = new FornecedorService(httpClientSpy as any);
//     })
    
//     it('carregarFornecedores deve retornar os fornecedores' , (done: DoneFn) => {
//         const expectedFornecedores: Fornecedor[] = [
//             {id: 1, nome: 'Carlos', endereco: 'R. Sim', cnpj: '4587265-8', fornecedorDesde: 2018, cargo: 'Fornecedor'},
//             {id: 2, nome: 'Carla', endereco: 'R. Não', cnpj: '4584566-8', fornecedorDesde: 2015, cargo: 'Fornecedor'},
//             {id: 3, nome: 'Eduardo', endereco: 'R. Talvez', cnpj: '4123568-9', fornecedorDesde: 2020, cargo: 'Fornecedor'},
//             {id: 4, nome: 'Sebastião', endereco: 'R. Quase', cnpj: '9856568-4', fornecedorDesde: 2010, cargo: 'Fornecedor'},
//         ]

//         httpClientSpy.get.and.returnValue(expectedFornecedores)

//         fornecedorService.carregar().subscribe(
//             fornecedores => {
//                 expect(fornecedores).toEqual(expectedFornecedores, 'Expected fornecedores');
//                 done();
//             },
//             done.fail
//         );
//         expect(httpClientSpy.get.calls.count()).toBe(1, 'one calls');
//     });

// })
