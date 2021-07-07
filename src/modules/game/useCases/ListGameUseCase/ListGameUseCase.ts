import { inject, injectable } from "tsyringe";

import { Game } from "@modules/game/infra/typeORM/entities/Game";
import { IGamesRepository } from "@modules/game/repositories/IGamesRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListGameUseCase {
  constructor(
    @inject("PropertyRepository")
    private propertyRepository: IGamesRepository
  ) {}

  async execute(): Promise<Game[]> {
    const propertyes = await this.propertyRepository.list();
    return propertyes;
  }
}

export { ListGameUseCase };
