type addType = (n1:number, n2:number) => number

function add(n1: number, n2: number = 10) : number {
    return n1 + n2
}

function calculate(n1, n2, addFn:addType){
    const result = addFn(n1, n2);
    console.log(result)
}

console.log(calculate(10, 20, add))