import express, { Router } from 'express';
import cors from 'cors';
import path from 'path';

interface Options {

    port: number;
    public_path: string;
    routes: Router

}

export class Server {
    
    private app = express();
    private readonly port: number;
    private readonly public_path: string;
    private readonly routes: Router;

    // todo: DI
    constructor(options: Options){

        const { port, public_path, routes } = options;

        this.port = port;
        this.public_path = public_path;
        this.routes = routes;

    }

    async start() {

        //parse data
        this.app.use( express.json() );

        //cors
        this.app.use( cors() );

        /// x-www-form-urlencoded
        this.app.use( express.urlencoded({ extended: true })); 

        //* Public Folder
        this.app.use( express.static( this.public_path ) );

        //* Routes
        this.app.use( this.routes );


        //* SPA
        this.app.get('*', (req, res) => {
            const indexPath = path.join( __dirname + `../../../${ this.public_path }/index.html` );
            res.sendFile(indexPath);
        });
        

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        });

    }

}

