import express from 'express';
import { getAllKittens } from '../controllers/kittensController.js';

const router = express.Router();

// Obtener todos los libros
router.get('/', getAllKittens);

export default router;