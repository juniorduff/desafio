import { container } from "tsyringe";

import { PropertyRepository } from "@modules/property/infra/typeORM/repositories/PropertyRepository";
import { IPropertyRepository } from "@modules/property/repositories/IPropertyRepository";
import { IUsersRepository } from "@modules/usuario/infra/repositories/IUsersRepository";
import { UsersRepository } from "@modules/usuario/infra/typeORM/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UserRepository",
  UsersRepository
);

container.registerSingleton<IPropertyRepository>(
  "PropertyRepository",
  PropertyRepository
);
