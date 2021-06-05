import { ICreateUserDTO } from "@modules/usuario/dtos/ICreateUserDTO";
import { User } from "@modules/usuario/infra/typeORM/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;

  findByEmail(email: string): Promise<User>;

  findById(user_id: string): Promise<User>;
}

export { IUsersRepository };
