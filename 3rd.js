var a = 1;

function someFunction(number) {
    function otherFunction(input) {
        return a;
    }

    a = 5;

    return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);

//Possible answers: 1  5  9  2  undefined  Error
//Correct answe: 5