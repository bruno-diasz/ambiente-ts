import { Cachorro } from "../entities/cachorro";
import { Gato } from "../entities/gato";

describe('Metodo do mamifero', () => {

    test('Gato deve retornar seu nome', () =>{
        let gato: Gato = new Gato('Siamês', 'Laranja', 'Dorival', 3);
        expect(gato.exibirNome()).toBe('Dorival');
    })
    test('Cachorro deve retornar seu nome', () =>{
        let cachorro: Cachorro= new Cachorro('Pincher', 'Preto', 'Gelson', 7, 5)
        expect(cachorro.exibirNome()).toBe('Gelson')
    })

})