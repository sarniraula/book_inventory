import express from 'express';
import { 
    addBook, 
    deleteBook, 
    getAllBooks, 
    updateBook, 
    filterInventory, 
    bulkAddBooks
} from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.post('/add-many', bulkAddBooks); //For testing purpose (Frontend not implemented)
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/filter', filterInventory); 

export default router;
