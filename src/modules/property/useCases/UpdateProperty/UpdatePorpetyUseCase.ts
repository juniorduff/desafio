import { inject, injectable } from "tsyringe";

import { IPropertyDTO } from "@modules/property/dtos/IPropertyDTO";
import { Property } from "@modules/property/infra/typeORM/entities/Property";
import { IPropertyRepository } from "@modules/property/repositories/IPropertyRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdatePorpetyUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IPropertyRepository
  ) {}

  async execute({
    id,
    numberProperty,
    cep,
    complement,
    rentValue,
    isAvailable,
    countRoom,
  }: IPropertyDTO): Promise<Property> {
    console.log(id);
    const propertyExists = await this.propertyRepository.findById(id);

    if (!propertyExists) {
      throw new AppError("property not found");
    }
    const property = this.propertyRepository.update({
      id,
      numberProperty,
      cep,
      complement,
      rentValue,
      isAvailable,
      countRoom,
    });
    return property;
  }
}

export { UpdatePorpetyUseCase };
