import { EntityRepository, Repository } from "typeorm";
import Book from "../entities/Book";

@EntityRepository(Book)
class BooksRepository extends Repository<Book> {
  public async findByISBN(isbn: number): Promise<Book | undefined> {
    const book = await this.findOne({
      where: {
        isbn,
      },
    });

    return book;
  }

  public async findByTitulo(titulo: string): Promise<Book[] | undefined> {
    const books = await this.find({
      where: {
        titulo,
      },
    });

    return books;
  }

  public async findById(id: number): Promise<Book | undefined> {
    const book = await this.findOne({
      where: {
        id,
      },
    });

    return book;
  }
}

export default BooksRepository;
