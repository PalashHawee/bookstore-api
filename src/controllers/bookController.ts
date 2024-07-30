import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../models/Book';

const addBook = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const newBook = await createBook(req.body);
  res.status(201).json(newBook);
};

const getAllBooks = async (_req: Request, res: Response) => {
  const books = await getBooks();
  res.status(200).json(books);
};

const getBook = async (req: Request, res: Response) => {
  const book = await getBookById(Number(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(200).json(book);
};

const modifyBook = async (req: Request, res: Response) => {
  const updatedBook = await updateBook(Number(req.params.id), req.body);
  if (!updatedBook) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(200).json(updatedBook);
};

const removeBook = async (req: Request, res: Response) => {
  const deleted = await deleteBook(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(204).send();
};

export { addBook, getAllBooks, getBook, modifyBook, removeBook };
