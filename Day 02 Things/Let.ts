let arr1 = ['1', '2', '3']
let arr2 = [1, 2, 3]

let arr3 : string[]

let arr4 : any[];

arr2.forEach((e) =>{
    console.log(e);
});

function printArray(ar :string[]) {
    arr2.forEach((e) =>{
        console.log(e);
    });
}

printArray(arr1);
printArray(arr2);