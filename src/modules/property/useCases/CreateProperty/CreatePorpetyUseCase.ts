import { inject, injectable } from "tsyringe";

import { Property } from "@modules/property/infra/typeORM/entities/Property";
import { IPropertyRepository } from "@modules/property/repositories/IPropertyRepository";

interface IRequest {
  cep: string;
  complement: string;
  countRoom: number;
  isAvailable: boolean;
  rentValue: number;
  numberProperty: number;
}

// ■ CEP
// ■ Número
// ■ Complemento
// ■ Valor do Aluguel em reais
// ■ Quantidade de quartos
// ■ Booleano com valor verdadeiro(se o imóvel estiver
// disponível) ou falso (se o imóvel estiver alugado)
@injectable()
class CreatePorpetyUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IPropertyRepository
  ) {}

  async execute({
    cep,
    complement,
    countRoom,
    isAvailable,
    rentValue,
    numberProperty,
  }: IRequest): Promise<Property> {
    return this.propertyRepository.create({
      cep,
      complement,
      countRoom,
      isAvailable,
      rentValue,
      numberProperty,
    });
  }
}

export { CreatePorpetyUseCase };
