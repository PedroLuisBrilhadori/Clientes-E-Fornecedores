import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';


import { Fornecedor } from '../modelo/fornecedor';
import { FornecedorService } from "./fornecedores.service"



describe('FornecedoreService (with mock)', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let fornecedorService: FornecedorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ FornecedorService ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        fornecedorService = TestBed.inject(FornecedorService);
    });

    afterEach(() =>{
        httpTestingController.verify();
    });

    describe('#carregar', () => {
        let expectedFornecedores: Fornecedor[]

        beforeEach(() => {
            fornecedorService = TestBed.inject(FornecedorService);
            expectedFornecedores = [
                {id: 1, nome: 'Carlos', endereco: 'R. Sim', cnpj: '4587265-8', fornecedorDesde: 2018, cargo: 'Fornecedor'}
            ] as Fornecedor[];
        });

        it('fornecedor deve ser igual ao expectedFornecedores', () => {
            fornecedorService.carregar().subscribe(
                fornecedores => expect(fornecedores).toEqual(expectedFornecedores, 'should return expected fornecedores'),
                fail
            );

            const req = httpTestingController.expectOne(fornecedorService.fornecedorUrl);
            expect(req.request.method).toEqual('GET');

            req.flush(expectedFornecedores);
        });
    });

    describe('#deletar', () => {
        let deletado: Fornecedor = {id: 1, nome: 'Carlos', endereco: 'R. Sim', cnpj: '4587265-8', fornecedorDesde: 2018, cargo: 'Fornecedor'}
        
        beforeEach(() => {
            fornecedorService = TestBed.inject(FornecedorService);
        });

        it("deve retornar o fornecedor dado", () => {
            fornecedorService.deleteFornecedor(deletado).subscribe(
                resultado => expect(resultado).toEqual(deletado),
                fail
            );
            const req = httpTestingController.expectOne(fornecedorService.fornecedorUrl + '/' + deletado.id);
            expect(req.request.method).toEqual('DELETE');

            req.flush(deletado);
        });
    });
});

