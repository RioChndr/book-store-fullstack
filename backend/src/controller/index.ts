import express from 'express';
import routerAuth from './auth';
import routerBook from './book';
import routerOrder from './order';

const routerController = express.Router();

routerController.use("/auth", routerAuth)
routerController.use("/book", routerBook)
routerController.use("/order", routerOrder)

export default routerController;