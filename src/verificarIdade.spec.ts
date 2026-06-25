import { verificarIdade } from "./verificarIdade";

describe("Verificar Idade", () => {
  test("maior de idade", () => {
    expect(verificarIdade(20)).toBe(true);
  });
});
