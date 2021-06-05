import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPorpetyUseCase } from "@modules/property/useCases/ListProperty/ListPorpetyUseCase";

class ListPorpetyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createPorpetyUseCase = container.resolve(ListPorpetyUseCase);

    const propertyes = await createPorpetyUseCase.execute();
    return response.status(200).json(propertyes);
  }
}

export { ListPorpetyController };
