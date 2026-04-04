import {concatenarComEspaco} from '../services/concatena'


test("Deve concatenar uma lista com espaço ", () => {
    let entrada: string[] =  ['Arrays', 'com', 'TypeScript'];
    let esperado: string = 'Arrays com TypeScript';
    
    expect(concatenarComEspaco(entrada)).toBe(esperado);
});