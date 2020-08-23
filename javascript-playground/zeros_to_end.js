// Moving Zeros To The End
var moveZeros = function (arr) {
    // TODO: Program me
    var count = 0;
    arr.forEach(function(value,ind){
        if(value === 0){
          count++;
        }
    })
    var newArr = arr.filter(function(num){
        return num!==0;
    })
    do{
        newArr.push(0);
        count--
    }while(count>0)
    return newArr;
}
// Test
var arr3 = [1,1,0,3,4,0,6,6,0,0,0,3,4];
moveZeros(arr3);

// WITH EXPERIENCE SOLUTION
// var moveZeros = function (arr) {
//     var filtedList = arr.filter(function(num){
//      return num !== 0;
//     });
//     var zeroList = arr.filter(function(num){
//      return num === 0;
//     });
//     return filtedList.concat(zeroList);
// }