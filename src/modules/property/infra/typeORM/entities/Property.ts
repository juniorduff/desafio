import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("property")
class Property {
  @PrimaryColumn()
  id: string;
  @Column()
  cep: string;
  @Column()
  complement: string;
  @Column()
  countRoom: number;
  @Column()
  isAvailable: boolean;
  @Column({ default: true })
  rentValue: number;
  @Column()
  numberProperty: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Property };
