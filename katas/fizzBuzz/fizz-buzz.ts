export function fizzBuzz(number: number) : string {
    if (number % 3 === 0) {
        return number % 5 === 0 ? "FizzBuzz" : "Fizz";
    }

    if (number % 5 === 0) {
        return "Buzz"
    }

    return number.toString();
}