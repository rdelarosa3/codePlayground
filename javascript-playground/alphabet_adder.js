function modifyString(str,num) {
    if (
        (typeof num !=="number") ||
        (typeof str!=="string") ||
        (str.replace(/[A-Za-z]/g,"").length > 0)
    ) return "invalid input";

    const lowerAbc = "a".charCodeAt(0);
    const upperAbc = "A".charCodeAt(0);
    return String.fromCharCode(...
        [...str].map((char) => {
            let indexAbc = char.toLowerCase().charCodeAt(0) + Math.round(num) - lowerAbc;
            while (indexAbc < 0) indexAbc += 26;
            if(char === char.toUpperCase()) return indexAbc <= 25 ? indexAbc + upperAbc : indexAbc%26 + upperAbc;
            return indexAbc <= 25 ? indexAbc + lowerAbc : indexAbc%26 + lowerAbc;
        })
    );
}
console.log(modifyString(3, 0)) // invalid input
console.log(modifyString("abcd", true)) // invalid input
console.log(modifyString("abcd", 0.))// returns "efgh";
console.log(modifyString("AbCd", 4.))// returns "EfGh";
console.log(modifyString("efgh", -4))// returns "abcd"
console.log(modifyString("WxYz", 3.5))// returns "AbCd";
console.log(modifyString("abcd", -4))// returns "wxyz";
console.log(modifyString("abcd!123", -28))// returns "yzab";

// function modifyString(str,num) {
//     if (typeof num !=="number" || typeof str!=="string") return "invalid input";
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let newStr = String.fromCharCode(...str)
//     return [...str].map((char) => {
//
//         let index = alphabet.indexOf(char) + Math.round(num);
//         while (index < 0) index += alphabet.length;
//         return index <= alphabet.length-1 ? alphabet[index] : alphabet[index%alphabet.length];
//     }).join("");
// }
