"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const authorController_1 = require("../controllers/authorController");
const router = express_1.default.Router();
router.post('/', [(0, express_validator_1.check)('name').not().isEmpty().withMessage('Name is required')], authorController_1.addAuthor);
router.get('/', authorController_1.getAllAuthors);
router.get('/:id', authorController_1.getAuthor);
router.put('/:id', authorController_1.modifyAuthor);
router.delete('/:id', authorController_1.removeAuthor);
exports.default = router;
