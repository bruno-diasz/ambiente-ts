import { fatiar } from "../fatiar";

let entrada = [2,4,6,2,8,9,5];
let esperado = [2,4];
test("Deve retornar dois primeiros elementos", () => {
    expect(fatiar(entrada)).toEqual(esperado)
})