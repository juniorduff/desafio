import { inject, injectable } from "tsyringe";

import { IPropertyRepository } from "@modules/property/repositories/IPropertyRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

@injectable()
class DeletePorpetyUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IPropertyRepository
  ) {}

  async execute(id: string): Promise<void> {
    const property = await this.propertyRepository.findById(id);

    if (!property) {
      throw new AppError("Property not found: ");
    }

    await this.propertyRepository.delete(id);
  }
}

export { DeletePorpetyUseCase };
