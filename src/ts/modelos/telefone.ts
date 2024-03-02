import Prototipo from "../interfaces/prototipo";

export default class Telefone implements Prototipo {
    public ddd: string;
    public numero: string;

    public clonar(): Prototipo {
        const novoTelefone = new Telefone();
        novoTelefone.ddd = this.ddd;
        novoTelefone.numero = this.numero;
        return novoTelefone;
    }
}