import { Request, Response } from "express";
import CreateBookService from "../services/CreateBookService";
import ListBooksService from "../services/ListBooksService";
import ShowBooksService from "../services/ShowBooksService";

export default class BooksController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const listBooks = new ListBooksService();

    const books = await listBooks.execute({ id });

    return res.json(books);
    //usuario
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showBook = new ShowBooksService();
    const book = await showBook.execute({ id });

    return res.json(book);
    //individual
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { isbn, titulo, autor, disponibilidade, user_id } = req.body;

    const createBook = new CreateBookService();
    const book = await createBook.execute({
      isbn,
      titulo,
      autor,
      disponibilidade,
      user_id,
    });

    return res.json(book);
  }
}
