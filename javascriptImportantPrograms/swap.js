
// How to swap Two Values.


// first method
// Arithematic Operator

var a=4;
var b=9;
 a=a+b       // a=13
 b=a-b       // b=13-9
 a=a-b       // a=13-4

  console.log("The value of a is :"+ a)
  console.log("The value of a is :"+ b)




  // second method
  // XOR Operator ( ^ )

  var a=6
  var b=7
  a=a^b    // a=0110    b=0111 =>   a= 0001
  b=a^b    // b=0111    a=0001 =>   b= 0110
  a=a^b    // a=0001    b=0110 =>   a= 0111

  console.log("The value of a is :"+ a)
  console.log("The value of a is :"+ b)




 // Third Method
 // Destructuring method
var a=10
var b=17

var [a,b] = [b,a]    

console.log("The value of a is :"+ a)
console.log("The value of a is :"+ b)
