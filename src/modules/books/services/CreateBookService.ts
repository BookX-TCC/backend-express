import { getCustomRepository } from "typeorm";
import Book from "../typeorm/entities/Book";
import BooksRepository from "../typeorm/repositories/BooksRepository";

interface IRequest {
  isbn: number;
  titulo: string;
  autor: string;
  user_id: number;
  disponibilidade: string;
}

class CreateBookService {
  public async execute({
    isbn,
    titulo,
    autor,
    user_id,
    disponibilidade,
  }: IRequest): Promise<Book> {
    const booksRepository = getCustomRepository(BooksRepository);

    const livro = booksRepository.create({
      isbn,
      titulo,
      autor,
      user_id,
      disponibilidade,
    });

    await booksRepository.save(livro);
    return livro;
  }
}

export default CreateBookService;
