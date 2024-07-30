import express from 'express';
import { check } from 'express-validator';
import { addAuthor, getAllAuthors, getAuthor, modifyAuthor, removeAuthor } from '../controllers/authorController';

const router = express.Router();

router.post(
  '/',
  [check('name').not().isEmpty().withMessage('Name is required')],
  addAuthor
);

router.get('/', getAllAuthors);
router.get('/:id', getAuthor);
router.put('/:id', modifyAuthor);
router.delete('/:id', removeAuthor);

export default router;
