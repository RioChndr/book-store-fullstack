import { User } from "@prisma/client";
import { sign, verify } from 'jsonwebtoken'
import { UserRepository } from "../repository/user.repository";
import { LoginDto, RegisterDto } from "../controller/dto";
import { compare, hash } from 'bcryptjs'

export async function serviceAuthLogin(loginDto: LoginDto) {
    const user = await UserRepository.find(loginDto.email)
    if (!user) throw new Error('User not found')
    const isValid = await validatePassword(loginDto.password, user.password)

    if (!isValid) throw new Error('Invalid password')
    return {
        token: generateToken(user)
    };
}

export async function serviceAuthRegister(registerDto: RegisterDto) {
    const user = await UserRepository.create({
        email: registerDto.email,
        name: registerDto.name,
        password: await hashPassword(registerDto.password)
    })
    return {
        token: generateToken(user)
    }
}

function validatePassword(password: string, hash: string) {
    return compare(password, hash)
}

function hashPassword(password: string) {
    return hash(password, 10)
}

function generateToken(user: User) {
    const payload = {
        iss: 'api',
        sub: user.id,
        iat: Date.now(),
        exp: Date.now() + 1000 * 60 * 60 * 24
    }
    return sign(payload, process.env.JWT_SECRET as string, {
        algorithm: 'HS256'
    })
}

export function validateToken(token: string) {
    return new Promise((resolve, reject) => {
        verify(token, process.env.JWT_SECRET as string, (err, payload) => {
            if (err) return reject(err)
            resolve(payload)
        })
    })
}