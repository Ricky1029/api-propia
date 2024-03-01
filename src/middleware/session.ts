import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const checkJwt = (req:RequestExt, res:Response, next:NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(" ").pop()
        const isUser = verifyToken(`${jwt}`) as { id:string };
        if (!isUser) {
            res.status(401);
            res.send("No tienes un JWT valido");
        } else {
            req.user = isUser as JwtPayload | { id: string; } | undefined;
            next();
        }
        console.log({jwtByUser});
        next();
    } catch (e) {
        console.log(e);
        res.status(400);
        res.send("Sesion no valida");
    }
}

export { checkJwt }