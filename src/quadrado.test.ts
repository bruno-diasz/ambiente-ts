import {calcQuadradoEach, calcQuadradoFor } from './quadrado'

describe ('Calculo do quadrado', () => {
    let entrada = [3,5,7,3,8,9,1];
    let esperado = [9, 25, 49, 9, 64, 81, 1];

    test('Deve funcionar com for simples', () => {
        expect(calcQuadradoFor(entrada)).toEqual(esperado)
    })

    test('Deve funcionar com forEach', () => {
        expect(calcQuadradoEach(entrada)).toEqual(esperado)
    })

})