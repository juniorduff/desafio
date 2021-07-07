import { inject, injectable } from "tsyringe";

import { IGames } from "@modules/game/dtos/IGames";
import { Game } from "@modules/game/infra/typeORM/entities/Game";
import { IGamesRepository } from "@modules/game/repositories/IGamesRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateGameUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IGamesRepository
  ) {}

  async execute({ id, name, description }: IGames): Promise<Game> {
    const propertyExists = await this.propertyRepository.findById(id);

    if (!propertyExists) {
      throw new AppError("game not found");
    }
    const property = this.propertyRepository.update({ id, name, description });
    return property;
  }
}

export { UpdateGameUseCase };
