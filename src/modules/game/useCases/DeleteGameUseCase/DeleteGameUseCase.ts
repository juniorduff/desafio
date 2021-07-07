import { inject, injectable } from "tsyringe";

import { IGamesRepository } from "@modules/game/repositories/IGamesRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

@injectable()
class DeleteGameUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IGamesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const property = await this.propertyRepository.findById(id);

    if (!property) {
      throw new AppError("Game not found: ");
    }

    await this.propertyRepository.delete(id);
  }
}

export { DeleteGameUseCase };
