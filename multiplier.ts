const multiplicator = (a:number, b:number, printText: string) => {
    console.log(printText, a * b)
}

// multiplicator(2, 4, "Multiplied numbers 2 and 4, result: ")

console.log(process.argv)

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a,b, `Multiplied ${a} and ${b} and the result is: `)