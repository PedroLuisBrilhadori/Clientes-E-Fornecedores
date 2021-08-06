import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
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

        it('should return expected fornecedores (called once)', () => {
            fornecedorService.carregar().subscribe(
                fornecedores => expect(fornecedores).toEqual(expectedFornecedores, 'should return expected fornecedores'),
                fail
            );

            const req = httpTestingController.expectOne(fornecedorService.fornecedorUrl);
            expect(req.request.method).toEqual('GET');

            req.flush(expectedFornecedores);
        });
 
        it('should return expected fornecedores (called one)', () => {
            fornecedorService.carregar().subscribe(
                fornecedores => expect(fornecedores).toEqual(expectedFornecedores, 'should return expected fornecedores'),
                fail
            );
            
            const req = httpTestingController.expectOne(fornecedorService.fornecedorUrl);
            expect(req.request.method).toEqual('GET');

            req.flush(expectedFornecedores);
        });

        it('should return expected fornecedores (called multiple times)', () => {
            fornecedorService.carregar().subscribe();
            fornecedorService.carregar().subscribe();
            fornecedorService.carregar().subscribe(
                fornecedores => expect(fornecedores).toEqual(expectedFornecedores, 'should return expected heroes'),
                fail
            );

            const requests = httpTestingController.match(fornecedorService.fornecedorUrl);
            expect(requests.length).toEqual(3, 'calls to carregar()');

            requests[0].flush([]);
            requests[1].flush([{id: 6, nome: 'Sebastião', endereco: 'R. Quase', cnpj: '9856568-4', fornecedorDesde: 2010, cargo: 'Fornecedor'}]);
            requests[2].flush([expectedFornecedores]); 
        });
    });

    describe('#delete', () => {
        const makeUrl = (id: number) => `${fornecedorService.fornecedorUrl}/${id}`;

        it('should delete a fornecedor and return it', () => {
            const deletedFornecedor: Fornecedor =  {id: 1, nome: 'Carlos', endereco: 'R. Sim', cnpj: '4587265-8', fornecedorDesde: 2018, cargo: 'Fornecedor'}

            fornecedorService.deleteFornecedor(deletedFornecedor).subscribe(
                data => expect(data).toEqual(deletedFornecedor, 'should return the fornecedor'),
                fail
            );

            const req = httpTestingController.expectOne(fornecedorService.fornecedorUrl);
            expect(req.request.method).toEqual('DELETE');
            expect(req.request.body).toEqual(deletedFornecedor);

            const expectedResponse = new HttpResponse( {status: 200, statusText: 'OK', body: deletedFornecedor} );
            req.event(expectedResponse);
        });
    });
});

