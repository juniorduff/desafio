import { container } from "tsyringe";

import { GameRepository } from "@modules/game/infra/typeORM/repositories/GameRepository";
import { IGamesRepository } from "@modules/game/repositories/IGamesRepository";

container.registerSingleton<IGamesRepository>(
  "PropertyRepository",
  GameRepository
);
