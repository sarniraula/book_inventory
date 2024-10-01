import express from 'express';
import { 
    addBook, 
    deleteBook, 
    getAllBooks, 
    updateBook, 
    filterInventory, 
    bulkAddBooks,
    getBookDetails
} from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/filter', filterInventory); 
router.get('/:id', getBookDetails);
router.post('/', addBook);
router.post('/add-many', bulkAddBooks); //For testing purpose (Frontend not implemented)
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
