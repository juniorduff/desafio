import { inject, injectable } from "tsyringe";

import { Property } from "@modules/property/infra/typeORM/entities/Property";
import { IPropertyRepository } from "@modules/property/repositories/IPropertyRepository";

interface IRequest {
  id: string;
}

@injectable()
class FindOnePropertyUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IPropertyRepository
  ) {}

  async execute(id: string): Promise<Property> {
    const propertyes = await this.propertyRepository.findById(id);
    return propertyes;
  }
}

export { FindOnePropertyUseCase };
