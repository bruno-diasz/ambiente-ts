import { fatiar } from "../fatiar";

test("Deve retornar dois primeiros elementos", () => {
    let entrada = [2,4,6,2,8,9,5];
    let esperado = [2,4];
    
    expect(fatiar(entrada)).toEqual(esperado)
})