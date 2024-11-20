const ar1 = ["a", "b"];
const ar2 = ["c"];
const ar3 = [...ar1, ...ar2]

// ar1.push(ar2[0],ar1[2])
ar1.push(...ar2)

console.log(ar3)