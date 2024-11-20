type subType = (n1:number, n2:number) => number

function sub(n1: number, n2: number = 10) : number {
    if(n1 > n2){
        return n1 - n2
    } else {
        return n2 - n1
    }
}

function substraction(n1, n2, subFn:subType){
    const result = subFn(n1, n2);
    console.log(result)
}

console.log(substraction(20, 10, sub))