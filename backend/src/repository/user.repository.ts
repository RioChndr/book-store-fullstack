import { User } from "@prisma/client";
import { db } from "../service/db";

export class UserRepository {
    static create(user: {
        email: string;
        name: string;
        password: string;
    }) {
        return db.user.create({ data: user })
    }
    static find(email: string) {
        return db.user.findUnique({ where: { email } })
    }

    static findId(id: string) {
        return db.user.findUnique({ where: { id } })
    }

    static subtractPoint(userId: string, point: number) {
        return db.user.update({
            where: { id: userId },
            data: {
                point: {
                    decrement: point
                }
            }
        })
    }
}