import { Request, Response, Router } from 'express';
import { orderServiceCreate, orderServiceList, userPoint } from '../service/order';
import { authenticateToken } from '../middlewares';

// POST /order
const createOrder = async (req: Request, res: Response) => {
    const { bookId } = req.body;

    console.log(req.user)

    if (!bookId) {
        return res.status(400).json({ message: 'Book ID is required' });
    }

    try {
        await orderServiceCreate({
            userId: req.user.sub,
            bookId
        })

        res.status(201).json({ message: 'Order created successfully' });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            message: "Failed to create order",
            error: error.message,
        });
    }
};
// GET /order/list
const getOrderList = async (req: Request, res: Response) => {
    try {
        const listData = await orderServiceList(req.user.sub);
        res.json(listData);
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            message: "Failed to retrieve order list",
            error: error.message,
        });
    }
};

const getPoint = async (req: Request, res: Response) => {
    try {
        const point = await userPoint(req.user.sub);
        res.json({ point });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            message: "Failed to retrieve user point",
            error: error.message,
        });
    }
}

const routerOrder = Router();
routerOrder.post("/", authenticateToken, createOrder);
routerOrder.get("/list", authenticateToken, getOrderList);
routerOrder.get("/point", authenticateToken, getPoint);
export default routerOrder;