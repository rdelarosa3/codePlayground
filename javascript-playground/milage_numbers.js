// Let's make it so Bob never misses another interesting number.
// We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers.
// We've got a box glued to his dash that lights up yellow or green depending on whether it
// receives a 1 or a 2 (respectively).
// It's up to you, intrepid warrior, to glue the parts together.
// Write the function that parses the mileage number input, and returns a 2 if the number is "interesting"
// (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number
// is not interesting.
// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences,

function isInteresting(number, awesomePhrases) {
    // Goa to town!a
    if(isNaN(number)||number<98){return 0}
    let nums = [Number(number + 2),Number(number + 1),Number(number)];
    let status = 0;
    nums.forEach(function (num,index) {
        let interesting = false;
        let numString = num.toString();
        let numsArray = numString.split("");

        let isSameNumber = numString[0].repeat(numString.length) === numString;
        let isPalindrome = numString === numString.split("").reverse().join("");
        let isIncluded = awesomePhrases.includes(num);

        let hasTrailingZeros = (function () {
            return numString === (numString[0] + ("0").repeat(numString.length - 1));
        })
        let isIncremental = (function () {
            for (let i = 1, j = 0; i < numsArray.length; i++, j++) {
                if (numsArray[j] === "9" && numsArray[i] === "0") {
                    continue;
                }
                if (
                    numsArray[j] === "0" && numsArray[i] === "1" ||
                    parseInt(numsArray[i]) - 1 !== parseInt(numsArray[j])
                ) {
                    return false;
                }
            }
            return true;
        });
        let isDecremental = (function () {
            for (let i = 1, j = 0; i < numsArray.length; i++, j++) {
                if (parseInt(numsArray[i]) + 1 !== parseInt(numsArray[j])) {
                    return false;
                }
            }
            return true;
        });
        let testsArray = [isSameNumber, isPalindrome, isIncluded, hasTrailingZeros(), isIncremental(), isDecremental()]
        testsArray.forEach(function (bool) {
            if (bool === true) {
                interesting = true;
            }
        })
        if(interesting && index===2 && num>99) {
            status = 2;
        }else if(interesting && index<2 ){
            status = 1;
        }

    })
    return status;

}
// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2