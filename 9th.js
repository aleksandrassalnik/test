function foo() {
    var bar = function () {
        return 3;
    };
    return bar();
    var bar = function () {
        return 8;
    };
}
console.log(foo()); //Instead of alert(foo());

//Possible answers:
//3
//8
//Error
//Kita:

//correnct answer: 3
