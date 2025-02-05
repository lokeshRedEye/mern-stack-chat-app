import express from 'express'
import { protetRoute } from '../middleware/auth.middleware.js';
import { getMessages, getUsersForSideBar, sendMessage } from '../controllers/message.controller.js';

const router = express.Router();


router.get('/users' , protetRoute , getUsersForSideBar)

router.get('/:id' , protetRoute , getMessages);

router.post('/send/:id'  , protetRoute , sendMessage);

export default router