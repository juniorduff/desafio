import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "@modules/usuario/CreateUser/CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { fullName, email, password, cpf } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      fullName,
      email,
      password,
      cpf,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
