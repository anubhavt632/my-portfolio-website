import express from 'express';
import {
  createContact,
  getContacts,
  updateContact,
  deleteContact
} from '../controllers/contact.controller.js';
import { protect, adminOnly } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', createContact);
router.get('/', protect, adminOnly, getContacts);
router.put('/:id', protect, adminOnly, updateContact);
router.delete('/:id', protect, adminOnly, deleteContact);

export default router;
