// Loops(Iterations)



// 1. WAP print 1 to 10 numbers using a while loop.

var i=1

while(i<=10){
    console.log(i);
    i++;

}   




// 2. WAP print 10 to 1 numbers using a while loop.

var i=10

while (i>=1) {
    
    console.log(i);
    i--;
    
}



// 3. WAP print 5 to 15 numbers using For loop. 

// for(initialization; condition; incre/decrement)
    
    // initialization  i=5
    // condition  (i<=15)
    // incre/decre  (i=i+1) 



var i=5

for(i=5; i<=15; i++){

    console.log(i);

}  




// 4. WAP print 15 to 5 numbers using For loop. 

// for(initialization; condition; incre/decrement)
    
//initialization  i=15
//condition  (i>=5)
//incre/decre  (i=i-1)


var i=15

for(i=15; i>=5; i--){
    console.log(i);

}  




// 5.WAP print 1 to 10 odd numbers using For loop.

//initialization  i=1
//condition  (i<=10)
//incre/decre  (i=i+2)

var i=1

for(i=1; i<=10; i=i+2){

    console.log(i);

}  



// 6.WAP print 1 to 10 Even numbers using While loop.

//initialization  i=2
//condition  (i<=10)
//incre/decre  (i=i+2)

var i=2

while (i<=10) {

    console.log(i);

    i=i+2;
    
}





// 7.WAP print 1 to 10 Even numbers using For loop.

//initialization  i=2
//condition  (i<=10)
//incre/decre  (i=i+2)

var i=2

for(i=2; i<=10; i=i+2){

    console.log(i);

}   





// 8. WAP first ten multiples of 4 using While loop.

//initialization  i=4
//condition  (i<=40)
//incre/decre  (i=i+4)

var i=4

while(i<=40){

    console.log(i);
    i=i+4;

}    



// 9. WAP factors of 24 using For loop.


var n=24

for(i=1; i<=n; i++){

    if(n%i==0){

         console.log(i);

    }
}
        




// 10. WAP factors of 55 using While loop.


var n=55
var i=1

while(i<=n){

    if(n%i==0){

        console.log(i);
        
    }

    i++;
}
           


//11. WAP factors of 62 using While loop.

var a=62;
var i=1;


while(i<=a){

    if(a%i==0){
        console.log(i);

    }
    i++;

}           



//12. WAP factors of 98 using for loop.

var n=98;
var i=1;

for(i=1; i<=n; i++){

    if(n%i==0){

        console.log(i);

    }

}






// 13. WAP Fibonacci series.

var a=1
var b=2
const number=20

c=a+b

while(c<=number){
    console.log(c);
    a=b
    b=c
    c=a+b

} 



// 14. WAP Fibonacci series.

var n1=0;
var n2=1;
const number1=17;
var n3=n1+n2;

while(n3<number1){

    console.log(n3);
    
    n1=n2;
    n2=n3;
    n3=n1+n2;

}      




// 15. WAP to print riverse of digits of numbers.

let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);


 


// 16. WAP to print riverse of digits of numbers.

let rev1=0
let numb=8576436883646;
let lastDigit1;

while(numb!=0){

    lastDigit1 = numb % 10;
    rev1 = rev1 * 10 + lastDigit1;
    numb = Math.floor(numb/10);           //-----------> here we should use capital M.


}

console.log("riverse number : "+ rev1);    















