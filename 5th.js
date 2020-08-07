function Sorter() {
    this.numbersArray = [1, 2, 3, 4];
    this.ods = [];
    this.evens = [];


    this.functinoSorting = function () {
        this.numbersArray.forEach(function (number) {
            if (number % 2 === 0) {
                this.evens.push(number);
            } else {
                this.ods.push(number)
            }
        });
    };

    this.arrowSorting = function () {
        this.numbersArray.forEach((number) => {
            if (number % 2 === 0) {
                this.evens.push(number);
            } else {
                this.ods.push(number)
            }
        });
    };
}

var fun = new Sorter()
fun.functinoSorting();
console.log(fun);

var arr = new Sorter()
arr.arrowSorting();
console.log(arr);

//Possible answers:
//Object with filled ods and evens properties
//Object with empty ods and evens properties
//undefined
//Error
//console.log(fun) //function?
//console.log(arr) //fat arrow?
