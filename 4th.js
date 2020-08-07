var fullName = 'John Doe';
Var objThis; //This typo was in code
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        fetFullName: function () {
            objThis = this;
            return this.fullName;
        }
    }
};

console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//Possible answers: "John Doe"  "Colin Ihgrid"  "Aurelio De Rosa"  undefined  Error

//Question:
//console.log(obj.prop.getFullName());?
//console.log(test());