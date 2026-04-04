import { pares } from "../pares"

test("Filtrar numeros pares", () => {
    let entrada = [8, 3, 9, 5, 6, 12];
    let esperado = [8, 6, 12];

    expect(pares(entrada)).toEqual(esperado);
})