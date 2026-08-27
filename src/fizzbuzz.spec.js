import fizbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero si no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
});


