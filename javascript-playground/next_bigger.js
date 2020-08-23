const nextBigger = (n) => {
    let max = `${n}`.split("").sort().reverse().join("");
        // .sort(function(a,b){
        //     return b-a;
        // })
        // .sort((a, b) => b - a)
        // .join("");

    let m = n;
    console.log("current N",n)
    console.log("current M",m)
    console.log("max",max);
    while (m <= max) {
        // console.log(m);
        if (hasSameDigits(++m, n)) return m;
    }

    return -1;
};

const hasSameDigits = (m, n) => {
    return `${m}`.split("").sort().join("") === `${n}`.split("").sort().join("");
};

console.log(nextBigger(513),531)
console.log(nextBigger(2017),2071)
console.log(nextBigger(414),441)
console.log(nextBigger(144),414)


// Find the largest number created in by the following
// function nextBigger(n){
//     //your code here
//
//     let nArray = n.split("");
//     let nums = [];
//     for(var i=0;i<n.length;i++){
//         nums.push(Number(nArray.join("")));
//         nArray.push(nArray.shift())
//     }
//     return Math.max(...nums);
//     // or
//     // num.toString().split("").sort().reverse().join("")
// }

