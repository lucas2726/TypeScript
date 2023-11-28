//arrays

let numbers: number[] = [1,2,3]

numbers.push(5)

console.log(numbers[2])

//sintaxe array 2
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

//any

const arr1 : any = [1, "teste", true, [], {nome: "Matheus"}]

console.log(arr1)

arr1.push(1, 2, 3)

//parametros tipados

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)

//retorno de uma função
function greeting(name: string):string/*Para só retornar uma string*/ {
    return `Olá, ${name}`
}

console.log(greeting("Matheus"))

//funcao anonimas
setTimeout(function() {
    const sallary: number = 1000
    console.log(sallary)
}, 2000)

//objetos
function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("X coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}
passCoordinates(objCoord)


//props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A" + a)
    console.log("B" + b)
    if(c) {
    console.log("C" + c)
    }
}

showNumbers(1, 2, 3)
showNumbers(5, 6)

//Validação de props opicional
function advancedGreeting(firstName: string, lastName?: string) {

if(lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`
}

return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Lucas", "Bueno"))
console.log(advancedGreeting("Pedro"))

//union type
function showBalance(balance: string | number) {
 console.log(`O saldo da conta é R${balance}`)
}

showBalance(100)
showBalance("600")
