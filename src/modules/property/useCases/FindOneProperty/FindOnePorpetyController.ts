import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOnePropertyUseCase } from "@modules/property/useCases/FindOneProperty/FindOnePorpetyUseCase";

class FindOnePorpetyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findOnePropertyUseCase = container.resolve(FindOnePropertyUseCase);
    const { id } = request.params;
    const property = await findOnePropertyUseCase.execute(id);
    return response.status(200).json(property);
  }
}

export { FindOnePorpetyController };
