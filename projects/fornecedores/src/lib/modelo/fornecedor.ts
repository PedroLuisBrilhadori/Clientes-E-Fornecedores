import { Pessoa } from "projects/shared/src/public-api";

export interface Fornecedor extends Pessoa {
    cnpj: number
    fornecedorDesde: number // ano
}