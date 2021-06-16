import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1620216035297 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "sobrenome",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "senha",
            type: "varchar",
          },
          {
            name: "sexo",
            type: "varchar",
          },
          {
            name: "data_nasc",
            type: "string",
          },
          {
            name: "telefone",
            type: "varchar",
          },
          {
            name: "end_cep",
            type: "varchar",
          },
          {
            name: "end_rua",
            type: "varchar",
          },
          {
            name: "end_num",
            type: "int",
          },
          {
            name: "end_cidade",
            type: "varchar",
          },
          {
            name: "end_bairro",
            type: "varchar",
          },
          {
            name: "end_uf",
            type: "varchar",
          },
          {
            name: "avatar",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
