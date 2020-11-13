lista=[]
soma=0
x=1
function total(){
    lista.push(x)
    for (i=0;i<lista.length;i++){
        soma +=lista[i]
    }
    return soma
}
console.log(total())
