import express from 'express';
import { getAllSubscribers, addSubscriber } from '../controllers/subscriberController.js';

const router = express.Router();

router.get('/', getAllSubscribers);
router.post('/', addSubscriber);

export default router;
