function teste (){

    //valor que tem que ser verdadeiro, CDN que está no mongo
    let a = 'https://cdn.layers.digital/sesigo-luziania/sync/68223fd22d8668ba77319a94/6ce555f8-5967-41bb-a28b-fd5db49752ea/groups.json'

    //valor que será checado, valor que está no openblocks
    let b = 'https://cdn.layers.digital/sesigo-luziania/sync/68223fd22d8668ba77319a94/6ce555f8-5967-41bb-a28b-fd5db49752ea/groups.json'


    if(a === b){
        return true
    }


    return false
}

console.log(teste())
