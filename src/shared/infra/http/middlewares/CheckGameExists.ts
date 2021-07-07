import { NextFunction, Request, Response } from "express";
import { validate } from "uuid";

import { GameRepository } from "@modules/game/infra/typeORM/repositories/GameRepository";
import { AppError } from "@shared/errors/AppError";

export async function checksGameExists(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.params;
  const propertyRepository = new GameRepository();

  const game = await propertyRepository.findById(id);
  if (!validate(id)) {
    throw new AppError("ID is not valid");
  }

  if (!game) {
    throw new AppError("Game Not found");
  }
  return next();
}
