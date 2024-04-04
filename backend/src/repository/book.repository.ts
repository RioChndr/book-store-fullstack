import { db } from "../service/db";

export class BookRepository {
    static list(lastId: string, limit: number = 10) {
        return db.books.findMany({
            where: {
                id: {
                    lt: lastId
                }
            },
            take: +limit,
            orderBy: {
                id: 'desc'
            }
        });
    }
    static detail(id: string) {
        return db.books.findUnique({ where: { id } });
    }

    static count() {
        return db.books.count();
    }
}