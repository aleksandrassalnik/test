function test () {
    console.log(a);
    console.log(foo());
  
    var a = 1;
    function foo() {
      return 2;
    }
  }
  
test();
  
//Possible answers: 1  2  undefined  null  Error

//Question:
//console.log(a)?
//console.log(foor())?
