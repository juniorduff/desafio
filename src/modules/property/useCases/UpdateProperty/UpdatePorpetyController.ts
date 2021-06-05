import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePorpetyUseCase } from "@modules/property/useCases/UpdateProperty/UpdatePorpetyUseCase";

class UpdatePropertyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updatePropertyUseCase = container.resolve(UpdatePorpetyUseCase);

    const { id } = request.params;
    const {
      cep,
      complement,
      countRoom,
      isAvailable,
      rentValue,
      numberProperty,
    } = request.body;

    const property = await updatePropertyUseCase.execute({
      id,
      cep,
      complement,
      countRoom,
      isAvailable,
      rentValue,
      numberProperty,
    });
    return response.status(200).json(property);
  }
}

export { UpdatePropertyController };
