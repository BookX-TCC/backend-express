import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooks1623810904488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "isbn",
            type: "bigint",
          },
          {
            name: "titulo",
            type: "varchar",
          },
          {
            name: "autor",
            type: "varchar",
          },
          {
            name: "ano_pub",
            type: "int",
            isNullable: true,
          },
          {
            name: "descricao",
            type: "text",
            isNullable: true,
          },
          {
            name: "editora",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "classificacao",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "capa",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "idioma",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "genero",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "disponibilidade",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "int",
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
    await queryRunner.dropTable("books");
  }
}
