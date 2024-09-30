import express from 'express';
import { 
    addBook, 
    deleteBook, 
    getAllBooks, 
    updateBook, 
    filterInventory, 
    exportBooksAsCSV,
    exportBooksAsJSON
} from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/filter', filterInventory); 
router.get('/export/csv', exportBooksAsCSV);
router.get('/export/json', exportBooksAsJSON);

export default router;
