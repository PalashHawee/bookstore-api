"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const bookController_1 = require("../controllers/bookController");
const router = express_1.default.Router();
router.post('/', [
    (0, express_validator_1.check)('title').not().isEmpty().withMessage('Title is required'),
    (0, express_validator_1.check)('authorId').isNumeric().withMessage('Author ID should be numeric'),
    (0, express_validator_1.check)('publishedDate').isDate().withMessage('Published date should be a date'),
    (0, express_validator_1.check)('pages').isNumeric().withMessage('Pages should be numeric'),
    (0, express_validator_1.check)('language').not().isEmpty().withMessage('Language is required')
], bookController_1.addBook);
router.get('/', bookController_1.getAllBooks);
router.get('/:id', bookController_1.getBook);
router.put('/:id', bookController_1.modifyBook);
router.delete('/:id', bookController_1.removeBook);
exports.default = router;
