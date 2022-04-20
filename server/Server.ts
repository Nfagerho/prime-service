
import express, { Application, Request, Response } from "express";
import * as bodyParser from "body-parser";
import PrimeController from "./routes/PrimeController";

const cors = require('cors');
const path = require('path');



class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errors();
    }



    /**
     * Function used to set up the configurations and possible middlewares
     */
    public config() {

        this.app.use( bodyParser.urlencoded( { limit: "10mb", extended: true } ) );
        this.app.use( bodyParser.json( { limit: "10mb", extended: true } as any ) );
        this.app.use( bodyParser.text() );
        this.app.use( cors() )
    }


    /**
     * Function to set up the routes.
     * Note: Controllers are responsible for handling the routes
     */
    private routes() {

        this.app.use( "/api/prime", PrimeController );


    }


    /**
     * Function used to handle errors that fell through the
     * error handling process.
     */
    private errors() {

        this.app.get( '*', (req: Request, res: Response) => {

            res.status( 404 );

            if ( req.accepts( "html" ) ) return res.render( "404", { title: "Page Not Found" } );

            if ( req.accepts( "json" ) ) return res.json( { error: "Not found" } );

            res.send( "Not found" );
        });
    }

}



export default new Server().app;