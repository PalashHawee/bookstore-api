"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBook = exports.modifyBook = exports.getBook = exports.getAllBooks = exports.addBook = void 0;
const express_validator_1 = require("express-validator");
const Book_1 = require("../models/Book");
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newBook = yield (0, Book_1.createBook)(req.body);
    res.status(201).json(newBook);
});
exports.addBook = addBook;
const getAllBooks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, Book_1.getBooks)();
    res.status(200).json(books);
});
exports.getAllBooks = getAllBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield (0, Book_1.getBookById)(Number(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
});
exports.getBook = getBook;
const modifyBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBook = yield (0, Book_1.updateBook)(Number(req.params.id), req.body);
    if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook);
});
exports.modifyBook = modifyBook;
const removeBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield (0, Book_1.deleteBook)(Number(req.params.id));
    if (!deleted) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(204).send();
});
exports.removeBook = removeBook;
