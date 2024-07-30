import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } from '../models/Author';

const addAuthor = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const newAuthor = await createAuthor(req.body);
  res.status(201).json(newAuthor);
};

const getAllAuthors = async (_req: Request, res: Response) => {
  const authors = await getAuthors();
  res.status(200).json(authors);
};

const getAuthor = async (req: Request, res: Response) => {
  const author = await getAuthorById(Number(req.params.id));
  if (!author) {
    return res.status(404).json({ message: 'Author not found' });
  }
  res.status(200).json(author);
};

const modifyAuthor = async (req: Request, res: Response) => {
  const updatedAuthor = await updateAuthor(Number(req.params.id), req.body);
  if (!updatedAuthor) {
    return res.status(404).json({ message: 'Author not found' });
  }
  res.status(200).json(updatedAuthor);
};

const removeAuthor = async (req: Request, res: Response) => {
  const deleted = await deleteAuthor(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ message: 'Author not found' });
  }
  res.status(204).send();
};

export { addAuthor, getAllAuthors, getAuthor, modifyAuthor, removeAuthor };
