import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { ClientesService } from "./clientes.service";
import { Cliente } from "../modelos/clientes";

describe("Cliente Service ", () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let clienteService: ClientesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ ClientesService ]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        clienteService = TestBed.inject(ClientesService);
    });

    afterEach(() => {
        httpTestingController.verify()
    });

    describe('#carregar', () => {
        let expectedClientes: Cliente[];

        beforeEach(() => {
            clienteService = TestBed.inject(ClientesService);
            expectedClientes = [
                {id: 5, nome: 'Glória', endereco: 'R. Deus', cpf: '45678912315', clienteDesde: 2015, cargo: 'Cliente'}
            ] as Cliente[]
        });

        it('cliente deve ser igual ao expectedClientes', () => {
            clienteService.carregar().subscribe(
                resultado => expect(resultado).toEqual(expectedClientes),
                fail
            )
        
            const req = httpTestingController.expectOne(clienteService.clientUrl);
            expect(req.request.method).toEqual('GET');

            req.flush(expectedClientes);
        });
    });

    describe("#deletar", () => {
        let deletado: Cliente = {id: 5, nome: 'Glória', endereco: 'R. Deus', cpf: '45678912315', clienteDesde: 2015, cargo: 'Cliente'}

        beforeEach(() =>{
            clienteService = TestBed.inject(ClientesService);
        });

        it("deve retornar o cliente dado", () => {
            clienteService.deleteCliente(deletado).subscribe(
                resultado => expect(resultado).toEqual(deletado),
                fail
            );

            const req = httpTestingController.expectOne(clienteService.clientUrl +'/'+ deletado.id);
            expect(req.request.method).toEqual("DELETE");

            req.flush(deletado);
        });
    });
});