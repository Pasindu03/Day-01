function add(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    return n1 + n2;
}
function sub(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    if (n1 > n2) {
        return n1 - n2;
    }
    else {
        return n2 - n1;
    }
}
function calculate(n1, n2, addFn) {
    var result = addFn(n1, n2);
    console.log(result);
}
function substraction(n1, n2, subFn) {
    var result = subFn(n1, n2);
    console.log(result);
}
console.log(calculate(10, 20, add));
console.log(substraction(20, 10, sub));
