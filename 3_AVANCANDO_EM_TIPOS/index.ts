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

//Avançando em union type
function showUserRole(role: boolean | string) {
    if (typeof role == "boolean") {
        return "Usuário não aprovado"
    }
    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//type alias
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")
showId(123)

//interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

//interface x type
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Lucas", age: 19}

console.log(somePerson)

type personType = {
    name: string
}

//Literal types
function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

console.log("left")

//non null assertion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

//bigint
let n: bigint

//n = 1
n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)

//symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)