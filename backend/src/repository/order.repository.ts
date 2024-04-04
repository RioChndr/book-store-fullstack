import { db } from "../service/db";
import { BookRepository } from "./book.repository";

export class OrderRepository {
    static async create(data: {
        userId: string,
        bookId: string,
    }) {
        const dataBook = await BookRepository.detail(data.bookId);
        if (!dataBook) throw new Error('Book not found');
        return db.userBooks.create({
            data: {
                bookId: data.bookId,
                userId: data.userId,
                usedPoint: dataBook.point,
            }
        })
    }

    static list(userId: string) {
        return db.userBooks.findMany({
            where: {
                userId
            },
        });
    }
}