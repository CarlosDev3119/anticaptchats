import { Request, Response, Router } from "express";



export class AuthRoutes {

    static get routes(){

        const router = Router();

        router.get('/auth', (req: Request, res: Response) => {

            res.json('hola desde el auth routes')

        });

        return router

    }

}