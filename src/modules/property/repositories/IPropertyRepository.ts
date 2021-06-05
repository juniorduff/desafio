import { IPropertyDTO } from "@modules/property/dtos/IPropertyDTO";
import { Property } from "@modules/property/infra/typeORM/entities/Property";

interface IPropertyRepository {
  create(data: IPropertyDTO): Promise<Property>;

  delete(id: string): Promise<void>;

  update(propertyExists: Property): Promise<Property>;

  list(): Promise<Property[]>;

  findById(id: string): Promise<Property>;
}

export { IPropertyRepository };
