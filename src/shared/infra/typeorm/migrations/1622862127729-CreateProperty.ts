import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProperty1622862127729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "property",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "cep", type: "varchar" },
          { name: "countRoom", type: "numeric" },
          { name: "isAvailable", type: "boolean" },
          { name: "rentValue", type: "numeric" },
          { name: "complement", type: "varchar" },
          { name: "numberProperty", type: "numeric" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("property");
  }
}
