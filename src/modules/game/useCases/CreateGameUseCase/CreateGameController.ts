import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateGameUseCase } from "@modules/game/useCases/CreateGameUseCase/CreateGameUseCase";

class CreateGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createPorpetyUseCase = container.resolve(CreateGameUseCase);
    await createPorpetyUseCase.execute({
      name,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateGameController };
