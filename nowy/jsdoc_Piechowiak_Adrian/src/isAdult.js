/**
 * checks ur age
 * @param{number} age - wiek
 * @returns{boolean} - wynik
 * @throws {Error} if 'age<0' is 'dead'
 * @author Adrian Piechowiak 5D
 **/



function isAdult(age) {
    if (age <= 0) {
        throw new Error("Ur dead man")
    }
    else  {
            return age >=18;
        }

}