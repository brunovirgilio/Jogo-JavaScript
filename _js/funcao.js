lista=[0]
soma=0

function total(x){
    lista.push(x)
    for (i=0;i<lista.length;i++){
        soma +=lista[i]
    }
}
console.log(total(1))
console.log(soma)

