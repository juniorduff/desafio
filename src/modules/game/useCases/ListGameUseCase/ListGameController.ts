import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListGameUseCase } from "@modules/game/useCases/ListGameUseCase/ListGameUseCase";

class ListGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createPorpetyUseCase = container.resolve(ListGameUseCase);

    const propertyes = await createPorpetyUseCase.execute();
    return response.status(200).json(propertyes);
  }
}

export { ListGameController };
