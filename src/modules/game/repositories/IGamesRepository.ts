import { IGames } from "@modules/game/dtos/IGames";
import { Game } from "@modules/game/infra/typeORM/entities/Game";

interface IGamesRepository {
  create(data: IGames): Promise<Game>;

  delete(id: string): Promise<void>;

  update(propertyExists: IGames): Promise<Game>;

  list(): Promise<Game[]>;

  findById(id: string): Promise<Game>;
}

export { IGamesRepository };
