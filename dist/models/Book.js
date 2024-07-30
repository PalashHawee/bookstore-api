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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getBooks = exports.createBook = void 0;
const db_1 = __importDefault(require("../config/db"));
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, db_1.default)('books').insert(book).returning('*');
});
exports.createBook = createBook;
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, db_1.default)('books').select('*');
});
exports.getBooks = getBooks;
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, db_1.default)('books').where({ id }).first();
});
exports.getBookById = getBookById;
const updateBook = (id, book) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, db_1.default)('books').where({ id }).update(book).returning('*');
});
exports.updateBook = updateBook;
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, db_1.default)('books').where({ id }).del();
});
exports.deleteBook = deleteBook;
