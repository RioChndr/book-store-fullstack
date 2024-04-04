import { BookOrderDto } from "../controller/dto";
import { BookRepository } from "../repository/book.repository";
import { OrderRepository } from "../repository/order.repository";
import { UserRepository } from "../repository/user.repository";

export async function orderServiceCreate(data: BookOrderDto) {
    const dataBook = await BookRepository.detail(data.bookId);
    if (!dataBook) throw new Error('Book not found');

    const userData = await UserRepository.findId(data.userId);
    if (!userData) throw new Error('User not found');
    if (userData.point < dataBook.point) throw new Error('Point not enough');

    const orderHistory = await OrderRepository.create({
        userId: data.userId,
        bookId: data.bookId,
    })
    await UserRepository.subtractPoint(data.userId, dataBook?.point)

    return orderHistory;
}
export async function orderServiceList(userId: string) {
    return OrderRepository.list(userId);
}

export async function userPoint(userId: string) {
    const userData = await UserRepository.findId(userId);
    if (!userData) throw new Error('User not found');

    return userData.point;
}