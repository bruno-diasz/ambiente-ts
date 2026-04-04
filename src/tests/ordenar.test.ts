import { ordenar } from "../ordenar"

let entrada =  ['carro', 'boneco', 'ave', 'lapis']
let esperado = ['lapis', 'carro', 'boneco', 'ave']

test("Deve ordenar a lista ", () => { 
    expect(ordenar(entrada)).toEqual(esperado)
})