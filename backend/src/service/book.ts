import { BookListDto } from "../controller/dto";
import { BookRepository } from "../repository/book.repository";

export async function bookServiceList(dto: BookListDto) {
    const list = await BookRepository.list(dto.lastId, dto.limit)
    const count = await BookRepository.count()
    return {
        list,
        count
    }
}

export async function bookServiceDetail(id: string) {
    return BookRepository.detail(id)
}