import { ordenar } from "../services/ordenar"


test("Deve ordenar a lista ", () => { 
    let entrada =  ['carro', 'boneco', 'ave', 'lapis']
    let esperado = ['lapis', 'carro', 'boneco', 'ave']
    
    expect(ordenar(entrada)).toEqual(esperado)
})