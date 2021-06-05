import { inject, injectable } from "tsyringe";

import { Property } from "@modules/property/infra/typeORM/entities/Property";
import { IPropertyRepository } from "@modules/property/repositories/IPropertyRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListPorpetyUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IPropertyRepository
  ) {}

  async execute(): Promise<Property[]> {
    const propertyes = await this.propertyRepository.list();
    return propertyes;
  }
}

export { ListPorpetyUseCase };
