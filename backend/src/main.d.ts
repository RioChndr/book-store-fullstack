declare namespace Express {
    export interface Request {
        user: {
            sub: string;
            iss: string;
            iat: number;
            exp: number;
        }; // or the type of your user object
    }
}