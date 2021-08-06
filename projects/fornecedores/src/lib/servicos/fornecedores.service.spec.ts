import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';


import { Fornecedor } from '../modelo/fornecedor';
import { FornecedorService } from "./fornecedores.service"

// describe('HeroesService (with spies)', () => {
//     let httpClientSpy: { get: jasmine.Spy };
//     let fornecedorService: FornecedorService;

//     beforeEach(() => {
//         httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//         fornecedorService = new FornecedorService(httpClientSpy as any);
//     });

//     it('should return expected fornecedores (httpclient called one)', (done: DoneFn) => {
//         const expectedFornecedores: Fornecedor[] = [
//             {id: 1, nome: 'Carlos', endereco: 'R. Sim', cnpj: '4587265-8', fornecedorDesde: 2018, cargo: 'Fornecedor'},
//             {id: 2, nome: 'Carla', endereco: 'R. Não', cnpj: '4584566-8', fornecedorDesde: 2015, cargo: 'Fornecedor'},
//             {id: 3, nome: 'Eduardo', endereco: 'R. Talvez', cnpj: '4123568-9', fornecedorDesde: 2020, cargo: 'Fornecedor'},
//             {id: 4, nome: 'Sebastião', endereco: 'R. Quase', cnpj: '9856568-4', fornecedorDesde: 2010, cargo: 'Fornecedor'},
//         ]

//         httpClientSpy.get.and.returnValue(expectedFornecedores);

//         fornecedorService.carregar().subscribe(
//             fornecedores => {
//                 expect(fornecedores).toEqual(expectedFornecedores, 'expected fornecedores');
//                 done();
//             },
//             done.fail
//         );
//         expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
//     });

//     it('shold return an error when the sever returns a 404', (done: DoneFn) =>{
//         const errorResponse = new HttpErrorResponse({
//             error: 'test 404 error',
//             status: 404, statusText: 'Not Found'
//         })
//         httpClientSpy.get.and.returnValue(errorResponse)

//         fornecedorService.carregar().subscribe(
//             fornecedores => done.fail('expected an error, not heroes'),
//             error => {
//                 expect(error.message).toContain('test 404 error');
//                 done();
//             }
//         );
//     });
// });

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
                {id: 1, nome: 'Carlos', endereco: 'R. Sim', cnpj: '4587265-8', fornecedorDesde: 2018, cargo: 'Fornecedor'},
                {id: 2, nome: 'Carla', endereco: 'R. Não', cnpj: '4584566-8', fornecedorDesde: 2015, cargo: 'Fornecedor'},
                {id: 3, nome: 'Eduardo', endereco: 'R. Talvez', cnpj: '4123568-9', fornecedorDesde: 2020, cargo: 'Fornecedor'},
                {id: 4, nome: 'Sebastião', endereco: 'R. Quase', cnpj: '9856568-4', fornecedorDesde: 2010, cargo: 'Fornecedor'},
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

        it('should be OK returning no heroes', () => {
            fornecedorService.carregar().subscribe(
                fornecedores => expect(fornecedores.length).toEqual(0, 'should have empty fornecedores array'),
                fail
            )
        });

        it('should turn 404 into a user-friendly error', () => {
            const msg = 'Deliberate 404';
            fornecedorService.carregar().subscribe(
                fornecedores => fail('expected to fail'),
                error => expect(error.message).toContain(msg)
            );

            const req = httpTestingController.expectOne(fornecedorService.fornecedorUrl);
            
            req.flush(msg, {status: 404, statusText: "Not Foundd"});
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

});

