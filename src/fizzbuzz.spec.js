import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero si no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
    it("deberia generar otro mismo numero si no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
      it("deberia generar Fizz si el numero es multiplo de 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
        it("deberia generar Fizz si el numero es multiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
          it("deberia generar Buzz si el numero es multiplo de 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
});


