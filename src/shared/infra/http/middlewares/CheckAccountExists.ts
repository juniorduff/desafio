import { NextFunction, Request, Response } from "express";
import { validate } from "uuid";

import { PropertyRepository } from "@modules/property/infra/typeORM/repositories/PropertyRepository";
import { AppError } from "@shared/errors/AppError";

export async function checksPropertyExists(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.params;
  console.log("entrou no middlewares");
  const propertyRepository = new PropertyRepository();

  const property = await propertyRepository.findById(id);
  if (!validate(id)) {
    throw new AppError("ID is not valid");
  }

  if (!property) {
    throw new AppError("property Not found");
  }
  return next();
}
