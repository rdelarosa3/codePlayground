function incrementString (strng) {
    if(!isNaN(strng[strng.length-1])){
        let nums = strng.split("").filter(function (char) {
            return !isNaN(char);
        })
        let str = strng.split("").filter(function (char) {
            return isNaN(char);
        })
        let leadingZeros = strng.split("").filter(function (char){
            return char === "0"
        })
        if((Number(nums.join(""))+1).toString().length > Number(nums.join("")).toString().length || Number(nums.join(""))===0){
                 leadingZeros.pop();
        }
        return str.join("") + leadingZeros.join("") + (Number(nums.join(""))+1);

    }
    return  strng+1;
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");