import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteGameUseCase } from "@modules/game/useCases/DeleteGameUseCase/DeleteGameUseCase";

class DeleteGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const createPorpetyUseCase = container.resolve(DeleteGameUseCase);
    await createPorpetyUseCase.execute(id);
    return response.status(200).json({ message: "Game removed successfully" });
  }
}

export { DeleteGameController };
