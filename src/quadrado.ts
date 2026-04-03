let lista: number[] = [3,5,7,3,8,9,1];

export function calcQuadradoFor(lista: number[]){
    let novaLista: number[] = []
    for(let i = 0; i < lista.length; i++){
        novaLista.push(lista[i]*lista[i]);
    }
    return novaLista;
}

export function calcQuadradoEach(lista: number[]){
    let novaLista: number[] = []
    lista.forEach( (item: number) => novaLista.push(item*item));
    return novaLista;
   
}
