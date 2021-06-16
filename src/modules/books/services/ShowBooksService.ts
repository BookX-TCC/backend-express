import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import BooksRepository from "../typeorm/repositories/BooksRepository";

interface IRequest {
  id: string;
}

class ShowBooksService {
  public async execute({ id }: IRequest): Promise<unknown> {
    const booksRepository = getCustomRepository(BooksRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const book = await booksRepository.findById(Number(id));

    if (!book) {
      throw new AppError("Livro não encontrado");
    }

    const user = await usersRepository.findById(book.user_id);

    return { book, user };
  }
}

export default ShowBooksService;
