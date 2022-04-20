export class ErrorHelper {

    /**
     * Helper method for constructing a proper error message
     *
     */
    public static getErrorMessage( error: any ): string {
        
        let errorMessage: string = "";

        if ( typeof error === "string" ) {
            errorMessage = error.toUpperCase();

        } else if ( error instanceof Error ) {
            errorMessage = error.message;
        }

        return errorMessage;
    }

}