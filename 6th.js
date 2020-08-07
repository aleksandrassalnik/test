function foo() {
    return bar();
    var bar = function () {
        return 3;
    };
    var bar = function () {
        return 8;
    };
}
console.log(foo()); //instead of alert(foo());

//3
//8
//Error
//Kita:
//
//Correct answer: Error