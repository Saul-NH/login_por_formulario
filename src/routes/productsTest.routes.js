import Router from 'express';
import * as productTestController from '../controllers/productsTest.controller.js';
const router = Router();

router.get('/',productTestController.index);
router.post('/',productTestController.getFakeProducts);

export default router;
