function kim(number){
    return number % 2 == 0
}
function fathan(number, callback){
    const isTrue = callback(number)
    if(isTrue){
        console.log(`${number} adalah bilangan genap`)
    } else {
        console.log(`${number} adalah bilangan ganjil`)
    }
}
fathan('10', kim)