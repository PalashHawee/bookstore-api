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
exports.removeAuthor = exports.modifyAuthor = exports.getAuthor = exports.getAllAuthors = exports.addAuthor = void 0;
const express_validator_1 = require("express-validator");
const Author_1 = require("../models/Author");
const addAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newAuthor = yield (0, Author_1.createAuthor)(req.body);
    res.status(201).json(newAuthor);
});
exports.addAuthor = addAuthor;
const getAllAuthors = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield (0, Author_1.getAuthors)();
    res.status(200).json(authors);
});
exports.getAllAuthors = getAllAuthors;
const getAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield (0, Author_1.getAuthorById)(Number(req.params.id));
    if (!author) {
        return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(author);
});
exports.getAuthor = getAuthor;
const modifyAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAuthor = yield (0, Author_1.updateAuthor)(Number(req.params.id), req.body);
    if (!updatedAuthor) {
        return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(updatedAuthor);
});
exports.modifyAuthor = modifyAuthor;
const removeAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield (0, Author_1.deleteAuthor)(Number(req.params.id));
    if (!deleted) {
        return res.status(404).json({ message: 'Author not found' });
    }
    res.status(204).send();
});
exports.removeAuthor = removeAuthor;
