import { plainToClass } from "class-transformer";
import { Router } from "express";
import { BookListDto } from "./dto";
import { bookServiceDetail, bookServiceList } from "../service/book";

const routerBook = Router();

routerBook.get("/list", async (req, res) => {
    const dto = plainToClass(BookListDto, req.query);
    try {
        res.json(await bookServiceList(dto));
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            message: "Failed to retrieve book list",
            error: error.message,
        });
    }
});

routerBook.get("/detail/:id", async (req, res) => {
    const bookId = req.params.id;
    try {
        res.json(await bookServiceDetail(bookId));
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            message: "Failed to retrieve book detail",
            error: error.message,
        });
    }
});

export default routerBook;