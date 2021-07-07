import { getRepository, Repository } from "typeorm";

import { IGames } from "@modules/game/dtos/IGames";
import { Game } from "@modules/game/infra/typeORM/entities/Game";
import { IGamesRepository } from "@modules/game/repositories/IGamesRepository";

class GameRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async update({ id, name, description }: IGames): Promise<Game> {
    const game = await this.repository.findOne(id);

    game.name = name;
    game.description = name;

    await this.repository.save(game);
    return game;
  }

  async list(): Promise<Game[]> {
    const games = await this.repository.find();
    return games;
  }

  async create({ name, description }: IGames): Promise<Game> {
    const game = await this.repository.create({
      name,
      description,
    });
    await this.repository.save(game);
    return game;
  }

  async findById(id: string): Promise<Game> {
    return this.repository.findOne(id);
  }
}

export { GameRepository };
