import { Router } from 'express';
import {
  createSaleController,
  deleteSaleController,
  getAllSalesController,
  getOneSaleController,
  updateSaleController,
} from '../../controllers';

import { authUser, validateShape, verifyExistingSale } from '../../middlewares';

import { createSaleShape } from '../../shapes';

const salesRouter = Router();

salesRouter.post(
  '/sales',
  authUser,
  validateShape(createSaleShape),
  createSaleController
);

salesRouter.patch(
  '/:id_sale/sales',
  authUser,
  verifyExistingSale,
  updateSaleController
);

salesRouter.delete(
  '/:id_sale/sales',
  authUser,
  verifyExistingSale,
  deleteSaleController
);

salesRouter.get('/sales', authUser, getAllSalesController);

salesRouter.get(
  '/:id_sale/sales',
  authUser,
  verifyExistingSale,
  getOneSaleController
);

export default salesRouter;
