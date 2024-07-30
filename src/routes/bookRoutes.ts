import express from 'express';
import { check } from 'express-validator';
import { addBook, getAllBooks, getBook, modifyBook, removeBook } from '../controllers/bookController';

const router = express.Router();

router.post(
  '/',
  [
    check('title').not().isEmpty().withMessage('Title is required'),
    check('authorId').isNumeric().withMessage('Author ID should be numeric'),
    check('publishedDate').isDate().withMessage('Published date should be a date'),
    check('pages').isNumeric().withMessage('Pages should be numeric'),
    check('language').not().isEmpty().withMessage('Language is required')
  ],
  addBook
);

router.get('/', getAllBooks);
router.get('/:id', getBook);
router.put('/:id', modifyBook);
router.delete('/:id', removeBook);

export default router;
