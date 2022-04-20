
import {Router, Request, Response} from "express";
import { ErrorHelper } from "../helpers/ErrorHelper";
import { NumberHelper } from "../helpers/NumberHelper";




class PrimeController {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }


    /**
     * Helper method for setting up the controller routes.
     */
    public routes(): void {
        this.router.get( '/:number', this.primeChecker );
        // I used post here, so that I can send the array with req.body and avoid gimmicks with get request
        this.router.post( '/sum', this.primeSumChecker );

    }



    /**
     * Route for checking if provided number is a prime númber.
     *
     */
    private primeChecker(req: Request, res: Response): Response {

        let number = req.params.number;

        try { 
            
            if ( !number || number.length === 0 ) throw Error("Input was not provided or it was empty");

            return res.status( 200 ).json( { "isPrime": NumberHelper.checkIfPrime( parseInt( number ) ) } );

        }  catch( error ) {

            return res.status( 500 ).json( { error: ErrorHelper.getErrorMessage( error ) } );
         }

    }

    /**
     * Route for calculating sum of positive integers and checking if the sum is a prime number.
     *
     */
    private primeSumChecker(req: Request, res: Response): Response {

        let numbers = req.body;

        try {

            if ( !numbers || numbers.length === 0 ) throw Error( "Body was empty" )

            const sum = NumberHelper.sumArray( numbers );

            const isPrime = NumberHelper.checkIfPrime( sum );

            return res.status( 200 ).json({"sum": sum, "isPrime": isPrime});

        } catch ( error ) {

            return res.status( 500 ).json( { error: ErrorHelper.getErrorMessage(error) } );
          }

        
    }
}



export default new PrimeController().router;
