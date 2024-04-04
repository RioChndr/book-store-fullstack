import { IsDefined, IsEmail, IsString, isDefined } from "class-validator";

export class LoginDto {
    @IsDefined()
    @IsEmail()
    email: string;

    @IsString()
    @IsDefined()
    password: string;
}

export class RegisterDto {
    @IsDefined()
    @IsEmail()
    email: string;

    @IsString()
    @IsDefined()
    password: string;

    @IsDefined()
    name: string;
}

export class BookListDto {
    lastId: string;
    limit: number = 10;
}

export class BookOrderDto {
    bookId: string;
    userId: string;
}