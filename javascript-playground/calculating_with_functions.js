// Calculating with Functions
var numArray = ["zero","one","two","three","four","five","six","seven","eight","nine"];
numArray.forEach(function (name,ind) {
    this[name] = function (){
        return arguments.length>0 ? parseInt(eval(ind+arguments[0])):ind;
    }
})

function plus() {
    return (`+${arguments[0]}`)
}
function minus() {
    return (`-${arguments[0]}`);
}
function times() {
    return (`*${arguments[0]}`);
}
function dividedBy() {
    return (`/${arguments[0]}`)
}                                          