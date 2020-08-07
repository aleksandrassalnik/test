console.log(foo()); //Instead of alert(foo());
function foo() {
    var bar = function () {
        return 3;
    };
    return bar();
    var bar = funcion() {
        return 8;
    };
}

//3
//8
//Error
//Kita:
//
//Correct answer: 3