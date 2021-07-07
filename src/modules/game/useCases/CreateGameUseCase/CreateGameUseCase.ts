import { inject, injectable } from "tsyringe";

import { Game } from "@modules/game/infra/typeORM/entities/Game";
import { IGamesRepository } from "@modules/game/repositories/IGamesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateGameUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IGamesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Game> {
    return this.propertyRepository.create({
      name,
      description,
    });
  }
}

export { CreateGameUseCase };
