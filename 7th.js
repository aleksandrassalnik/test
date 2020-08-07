function foo() {
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo()); //Instead of alert(foo());

//Possible answers:
//3
//8
//Error
//Kita:

//Correct answer: 8