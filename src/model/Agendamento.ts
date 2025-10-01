import { User } from "./User";
import { Barbeiro } from "./Barbeiro";
import { Servico } from "./Servico";

export class Agendamento {
  constructor(
    private id: string,
    private cliente: User,
    private barbeiro: Barbeiro,
    private servico: Servico,
    private dataHora: Date
  ) {
    if (!cliente) throw new Error("cliente obrigatório");
    if (!barbeiro) throw new Error("barbeiro obrigatório");
    if (!servico) throw new Error("serviço obrigatório");
    if (!dataHora) throw new Error("datahora obrigatório");
  }
  static create(
    cliente: User,
    barbeiro: Barbeiro,
    servico: Servico,
    dataHora: Date
  ) {
    const id = crypto.randomUUID();
    return new Agendamento(id, cliente, barbeiro, servico, dataHora);
  }

  getId(): string {
    return this.id;
  }

  getCliente(): User {
    return this.cliente;
  }

  getBarbeiro(): Barbeiro {
    return this.barbeiro;
  }

  getServico(): Servico {
    return this.servico;
  }

  getDataHora(): Date {
    return this.dataHora;
  }
}
