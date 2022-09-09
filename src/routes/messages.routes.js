import Router from 'express';
import * as messageController from '../controllers/messages.controller.js';
const router = Router();


router.get('/', messageController.getAllMessages)
router.post('/', messageController.addMessage)


export default router;
