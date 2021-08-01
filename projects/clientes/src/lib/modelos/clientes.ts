import { Pessoa } from "projects/shared/src/public-api";

export interface Cliente extends Pessoa {
    cpf: string,
    clienteDesde: number // ano
}