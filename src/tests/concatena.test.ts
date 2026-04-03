import {concatenarComEspaco} from '../concatena'

let entrada: string[] =  ['Arrays', 'com', 'TypeScript'];
let esperado: string = 'Arrays com TypeScript';

test("Deve concatenar uma lista com espaço ", () => {
    expect(concatenarComEspaco(entrada)).toBe(esperado);
});