import db from '../config/db';

interface Book {
  id?: number;
  title: string;
  authorId: number;
  publishedDate: string;
  pages: number;
  language: string;
}

const createBook = async (book: Book) => {
  return await db('books').insert(book).returning('*');
};

const getBooks = async () => {
  return await db('books').select('*');
};

const getBookById = async (id: number) => {
  return await db('books').where({ id }).first();
};

const updateBook = async (id: number, book: Partial<Book>) => {
  return await db('books').where({ id }).update(book).returning('*');
};

const deleteBook = async (id: number) => {
  return await db('books').where({ id }).del();
};

export { Book, createBook, getBooks, getBookById, updateBook, deleteBook };
