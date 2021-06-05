import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePorpetyUseCase } from "@modules/property/useCases/CreateProperty/CreatePorpetyUseCase";

class CreatePorpetyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      cep,
      countRoom,
      isAvailable,
      complement,
      rentValue,
      numberProperty,
    } = request.body;
    const createPorpetyUseCase = container.resolve(CreatePorpetyUseCase);
    await createPorpetyUseCase.execute({
      cep,
      complement,
      countRoom,
      isAvailable,
      rentValue,
      numberProperty,
    });

    return response.status(201).send();
  }
}

export { CreatePorpetyController };
