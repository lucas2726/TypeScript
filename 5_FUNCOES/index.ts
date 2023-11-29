// void
function withoutReturn(): void {
    console.log("Não tem retorno")
}

withoutReturn()

//callback com argumento
function greeting(name: string) {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, username: string) {
    console.log("Preparando a função")

    const greet = f(username)

    console.log(greet)
}

preGreeting(greeting, "Lucas")

//generic
function firtsElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firtsElement([1, 2, 3]))
console.log(firtsElement(["a", "b", "c"]))
//console.log(firtsElement("teste"))
function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({ name: "Matheus" }, { age: 30, job: "Programmer" })

console.log(newObject)

//Constrainsts nas Generic functions
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("12", "3"))
//console.log(biggestNumber(false, true))
//console.log(biggestNumber("5", 3))

//especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]))

//parametros opicionais
function modernGreeting(name: string, greet?: string) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`
    }
    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Matheus"))
console.log(modernGreeting("Pedro", "Dr."))


// parametro default
function somaDefault(n: number, m = 10) {
    return n + m
  }
  
  console.log(somaDefault(5, 20))
  console.log(somaDefault(5))
  
  //  unknown
  function doSomething(x: unknown) {
    if (typeof x === 'number') {
      console.log('É um número!')
    } else {
      console.log('Não é um número!')
    }
    // x()
  }
  
  doSomething(10)
  doSomething(false)
  
  // never
  function showErrorMsg(msg: string): never {
    throw new Error(msg)
  }
  
  // showErrorMsg('Algo deu errado!')
  
  // rest operator como parametro
  function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
  }
  
  console.log(sumAll(1, 2, 3, 4))
  console.log(sumAll(4, 5, 6))
  
  // destructuring como parametro
  function showProductDetails({
    name,
    price,
  }: {
    name: string
    price: number
  }): string {
    return `O nome do produto é ${name} e o seu preço é R$${price}`
  }
  
  const shirt = { name: 'Camisa', price: 59.99 }
  
  console.log(showProductDetails(shirt))