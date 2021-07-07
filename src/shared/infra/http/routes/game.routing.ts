import { Router } from "express";

import { CreateGameController } from "@modules/game/useCases/CreateGameUseCase/CreateGameController";
import { DeleteGameController } from "@modules/game/useCases/DeleteGameUseCase/DeleteGameController";
import { ListGameController } from "@modules/game/useCases/ListGameUseCase/ListGameController";
import { UpdateGameController } from "@modules/game/useCases/UpdateGameUseCase/UpdateGameController";

const createGameController = new CreateGameController();
const deleteGameController = new DeleteGameController();
const listGameController = new ListGameController();
const updateGameController = new UpdateGameController();
const gameRoutes = Router();

gameRoutes.post("/", createGameController.handle);
gameRoutes.delete("/:id", deleteGameController.handle);
gameRoutes.get("/", listGameController.handle);
gameRoutes.put("/:id", updateGameController.handle);
export { gameRoutes };
