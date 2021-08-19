import { Pessoa } from "projects/shared/src/public-api";

export interface Cliente extends Pessoa {
    cpf: number,
    clienteDesde: number // ano
}