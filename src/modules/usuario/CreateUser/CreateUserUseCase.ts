import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/usuario/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/usuario/infra/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    fullName,
    password,
    email,
    cpf,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);
    if (userAlreadyExist) {
      throw new AppError("this email already exists");
    }
    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      fullName,
      email,
      cpf,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
