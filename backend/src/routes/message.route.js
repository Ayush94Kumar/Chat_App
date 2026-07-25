import express from 'express'
import { auth } from '../middleware/auth.middleware.js';
import { getAllContacts,getMessagesByUserId,sendMessage ,getChatPartners} from '../controllers/message.controller.js';

const router = express.Router();

router.get('/contacts',auth,getAllContacts);
router.get('/chats',auth,getChatPartners);
router.get('/:id',auth,getMessagesByUserId);
router.post('/send/:id',auth,sendMessage);


export default router