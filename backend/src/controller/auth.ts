import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import express from 'express';
import { serviceAuthLogin, serviceAuthRegister } from '../service/auth';
import { LoginDto, RegisterDto } from './dto';

const routerAuth = express.Router();

routerAuth.post("/login", async (req, res) => {
    const loginDto = plainToClass(LoginDto, req.body);
    try {
        await validateOrReject(loginDto, { always: true })
    } catch (err) {
        return res.status(400).json({
            message: 'Validation error',
            errors: err
        })
    }

    try {
        const result = await serviceAuthLogin(loginDto);
        res.json(result);
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to login",
            error: error.message,
        })
    }
})

routerAuth.post("/register", async (req, res) => {

    const registerDto = plainToClass(RegisterDto, req.body);
    try {
        await validateOrReject(registerDto, { always: true })
    } catch (err) {
        return res.status(400).json({
            message: 'Validation error',
            errors: err
        })
    }
    try {
        const result = await serviceAuthRegister(registerDto);
        res.json(result);
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to login",
            error: error.message,
        })
    }
})

export default routerAuth;