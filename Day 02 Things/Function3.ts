function add(n1: number, n2: number = 10) : number {
    if(n1 < 100){
        return n1 + n2
    } else {
        return n1
    }
}

console.log(add(10))

console.log(add(10, 30))