import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddBooksForeignKey1623812934099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "books",
      new TableForeignKey({
        name: "BooksUser",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("books", "BooksUser");
  }
}
