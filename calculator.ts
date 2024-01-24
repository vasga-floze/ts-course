type Operation = 'multiply'| 'add'| 'divide'
type Result = number

const calculator = (a: number, b: number, op: Operation): Result => {
    // if (!operations.includes(op)) {
    //     console.log('This operation is not defined')
    // }

    if (op === 'multiply') return a*b
    if (op === 'add') return a+b

    if (op == 'divide') {
        if (b === 0) throw new Error("Can't divide by 0, sorry")
        return a/b
    }

    throw new Error('Operation is not valid')
}

// try {
//     console.log(calculator(1,3, 'multiply'))
// } catch (e) {
//     console.log('Something went wrong', e)
// }

console.log(process.argv)