import { soma } from "../src/calculadora";

describe("Calculadora", () => {
  test("deve somar", () => {
    expect(soma(2, 2)).toBe(4);
  });
});
