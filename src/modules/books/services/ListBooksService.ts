import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Book from "../typeorm/entities/Book";
import BooksRepository from "../typeorm/repositories/BooksRepository";

interface IRequest {
  id: string;
}

class ListBooksService {
  public async execute({ id }: IRequest): Promise<Book[]> {
    const booksRepository = getCustomRepository(BooksRepository);

    const books = await booksRepository.find({ where: { user_id: id } });

    if (books === []) {
      throw new AppError("Nenhum livro encontrado");
    }

    return books;
  }
}

export default ListBooksService;
