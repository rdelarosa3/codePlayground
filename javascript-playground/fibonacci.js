console.log("Fibonacci Number");
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// every number after the first two is the sum of the two preceding ones:
// create a function that takes in a number that will print a fibonacci sequence up to that number

function fibonacci(n){
    let x = 0;
    let y = 1;
    let arr = [x,y];
    if (n > 0){
        do {
            y += x;
            x = y - x;
            arr.push(y);
        } while (y < n);
    }
    return arr;
}

// test sequence;
var fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
var fibs2 = fibonacci(144);

if(fibs.length===fibs2.length){
    for(let i = 0; i<fibs.length;i++){
        if(fibs[i] !== fibs2[i]){
            console.log(false);
        }
        else{
            console.log(true);
        }
    }
}
