import { getRepository, Repository } from "typeorm";

import { IPropertyDTO } from "@modules/property/dtos/IPropertyDTO";
import { Property } from "@modules/property/infra/typeORM/entities/Property";
import { IPropertyRepository } from "@modules/property/repositories/IPropertyRepository";

class PropertyRepository implements IPropertyRepository {
  private repository: Repository<Property>;

  constructor() {
    this.repository = getRepository(Property);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async update({
    id,
    countRoom,
    cep,
    numberProperty,
    rentValue,
    complement,
    isAvailable,
  }: IPropertyDTO): Promise<Property> {
    const propertyFind = await this.repository.findOne(id);

    propertyFind.complement = complement;
    propertyFind.countRoom = countRoom;
    propertyFind.cep = cep;
    propertyFind.rentValue = rentValue;
    propertyFind.numberProperty = numberProperty;
    propertyFind.isAvailable = isAvailable;

    await this.repository.save(propertyFind);
    return propertyFind;
  }

  async list(): Promise<Property[]> {
    const allProperties = await this.repository.find();
    return allProperties;
  }

  async create({
    countRoom,
    cep,
    numberProperty,
    rentValue,
    complement,
    isAvailable,
  }: IPropertyDTO): Promise<Property> {
    const property = await this.repository.create({
      countRoom,
      cep,
      numberProperty,
      rentValue,
      complement,
      isAvailable,
    });
    await this.repository.save(property);
    return property;
  }

  async findById(id: string): Promise<Property> {
    const property = await this.repository.findOne({ id });
    return property;
  }
}

export { PropertyRepository };
