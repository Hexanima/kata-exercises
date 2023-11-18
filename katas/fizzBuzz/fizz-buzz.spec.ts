import { fizzBuzz } from "./fizz-buzz";

describe("FizzBuzz Functionality", () => {
  test("Given a number, return the same number as string", () => {
    let result : string = fizzBuzz(4);

    expect(result).toBe("4");
  });

  test("Given a number that is a multiple of three, return the word 'Fizz'", () => {
    let result : string = fizzBuzz(6);

    expect(result).toBe("Fizz");
  })

  test("Given a number that is a multiple of five, return the word 'Buzz'", () => {
    let result : string = fizzBuzz(10);

    expect(result).toBe("Buzz");
  })

  test("Given a number that is a multiple of three and five, return the word 'FizzBuzz'", () => {
    let result : string = fizzBuzz(15);

    expect(result).toBe("FizzBuzz");
  })
});
