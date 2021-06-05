import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePorpetyUseCase } from "@modules/property/useCases/DeleteProperty/DeletePorpetyUseCase";

class DeletePorpetyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const createPorpetyUseCase = container.resolve(DeletePorpetyUseCase);
    await createPorpetyUseCase.execute(id);
    return response
      .status(200)
      .json({ message: "Property removed successfully" });
  }
}

export { DeletePorpetyController };
