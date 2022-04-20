export class NumberHelper {


    /**
     * Helper method for getting sum of an array of positive integeres
     *
     */
    public static sumArray(numbers: number[]) {

        if ( !numbers || numbers.length === 0 ) throw Error( "List was empty" )

        if ( !this.onlyNumbers(numbers) )  throw Error( "Array contain NaN" )

        if ( !this.onlyPositiveNumbers(numbers) ) throw Error( "Negative number was provided" )

        const sum = numbers.reduce( (a: number, b: number) => {
            return a + b;
        }, 0);

        return sum;
    }



    /**
     * Helper method for checking if number is a prime number
     *
     */
    public static checkIfPrime(num: number): boolean {

        if ( isNaN(num) ) throw Error( "Provided input was not a number" );

        for( let i = 2, s = Math.sqrt(num); i <= s; i++ ) {

            if ( num % i === 0 ) return false; 
        }

        return num > 1;
    }


    /**
     * Helper method for checking if all provided values are really numbers
     *
     */
    public static onlyNumbers(numbers: number[]) {

        return numbers.every( (number: number) =>  {
            return !isNaN( number );
        });

    }


    /**
     * Helper method for checking if all numbers are positive
     *
     */
    public static onlyPositiveNumbers(numbers: number[]) {

        return numbers.every( (number: number) =>  {
            return number >= 0;
        });

    }

}