import express from 'express';
import {
  getAllClients,
  addClient,
  updateClient,
  deleteClient
} from '../controllers/clientController.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllClients);
router.post('/', requireAuth, addClient);
router.put('/:id', requireAuth, updateClient);
router.delete('/:id', requireAuth, deleteClient);

export default router;
