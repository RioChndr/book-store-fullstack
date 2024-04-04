import { Books, Prisma, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const db = new PrismaClient();


async function seedBooks() {
    try {
        const books: Prisma.BooksCreateInput[] = [];

        const listTags = [
            "Fiction",
            "Non-Fiction",
            "Fantasy",
            "Science Fiction",
            "Mystery",
            "Thriller",
            "Romance",
            "Horror",
            "Self-Help",
            "Biography",
            "Autobiography",
            "History",
            "Science",
        ]

        books.push(...Array.from({ length: 100 }, () => ({
            title: faker.lorem.words(3),
            author: faker.person.fullName(),
            cover: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            point: 10,
            tags: Array.from({ length: 3 }, () => {
                return listTags[Math.floor(Math.random() * listTags.length)];
            })
        } as Prisma.BooksCreateInput)));

        await db.books.createMany({
            data: books,
        });

        console.log("Books seeded successfully");
    } catch (error) {
        console.error("Error seeding books:", error);
    } finally {
        await db.$disconnect();
    }
}


seedBooks();