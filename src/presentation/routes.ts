import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { versionApi } from "../config";


export class AppRoutes {


    static get routes(): Router {
        const router = Router();

        router.use(versionApi.versionPath, AuthRoutes.routes);
      

        return router;
    }

}