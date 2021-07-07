import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateGameUseCase } from "@modules/game/useCases/UpdateGameUseCase/UpdateGameUseCase";

class UpdateGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updatePropertyUseCase = container.resolve(UpdateGameUseCase);

    const { id } = request.params;
    const { name, description } = request.body;

    const property = await updatePropertyUseCase.execute({
      id,
      name,
      description,
    });
    return response.status(200).json(property);
  }
}

export { UpdateGameController };
