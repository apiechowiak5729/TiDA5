/**
 * divides 2 numbers
 * @param{number} a - dzielna
 * @param{number} b - dzielnik
 * @returns{number} - wynik
 * @example
 * const a = 10
 * const b = 20
 *
 * const result = divideNumbers(a, b)
 * console.log(result)
 * @throws {Error} if 'b' is 0
 * @author Adrian Piechowiak 5D
 */



function divide(a, b) {
    if (b!=0) {
        return a/b;
    }
    else{
        return "u cant divide by 0";
    }


}