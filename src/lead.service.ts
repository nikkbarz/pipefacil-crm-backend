import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  async createLead(data: {
    nome: string;
    email: string;
    telefone: string;
    origem: string;
    tipoImovel: string;
    bairro: string;
    cidade: string;
    faixaValor: string;
    mensagem?: string;
  }) {
    return await this.prisma.lead.create({
      data,
    });
  }
}
