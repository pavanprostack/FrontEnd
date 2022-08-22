


// 1. WAP given number is divisible by 7

var num=55;

if(num%7==0){
    console.log("it is true");

}
else{
    console.log("it is false");
}




// 2. WAP given number is multiple of 3

  var a=9;

if(a%3==0){
     console.log("yes,it is multiple");
}
else{
    console.log("No,it is not multiple");
}




// 3. given number is positive or negative or zero

var num=0;

if(num>0){
    console.log("it is positive number");
}else if(num==0){
    console.log("it is Zero");
}else{
    console.log("it is negative number");
}




// 4. given number is a 3 digit number or not

var a=99;

if(a>=100 && a<=999){

    console.log("yes,it is a three digit number");
}else{
    console.log("No, it is not a three digit number");
} 




// 5. given number is even number or odd number.


var num=99

if(num%2==0){
    console.log(" it is a even Number");
}else{
    console.log("it is a odd nummber");
} 




// 6. Print greatest number in given two numbers.

var a=67
var b= 78

if(a>b){
   console.log("a, is big");
}else{
    console.log("b, is big");
}    




// 7. Print least number in given two numbers.

var a=55
var b=55

if(a<b){

    console.log("a, is least value");
}else if(a=b){
    console.log("a,b, both are equal");
} else{
    
    console.log("b, is least value ")
}

 


// 8.87print greatest number in given three numbers.

var a=10
var b=77
var c=45

if(a>=b && a>=c){
   console.log("a, is big");

}else if( b>=a && b>=c){

    console.log("b, is big");
}else{
    console.log("c,is big");

}    


// 8.87print greatest number in given three numbers.

var a=10
var b=77
var c=45

if(a<=b && a<=c){
   console.log("a, is least");

}else if( b<=a && b<=c){

    console.log("b, is least");
}else{
    console.log("c,is least");

}    




// 9. WAP print the given three numbers in ascending order.

var a=7
var b=2
var c=1

if(a<b && a<c){

    if(b<c){

        console.log(a +',' +b+ ',' +c);}

       else{ console.log(a+',' +b+ ',' +c);
    }
}else if(b<a && b<c){
      
    if(c<a){
 
        console.log(b +',' +c+ ',' +a);}
      else{  console.log(b +',' +a+ ',' +c);
    }
}else if(c<a && c<b){

    if(a<b){

        console.log(c +',' +a+ ',' +b);}
       else{ console.log(c +',' +b+ ',' +a);
    }
}              




// 10. WAP print the given three numbers in descending order.

var a=78
var b=55
var c=99

if(a>b && a>c){

    if(b>c){

        console.log(a+ "," +b+ "," +c);
        
        }else{
            console.log(a+ "," +b+ "," +c);
    
    }
}else if(b>c && b>a){

    if(c>a){

        console.log(b+ "," +c+ "," +a);

    }else{
        console.log(b+ "," +a+ "," +c);
    }

}else if(c>a && c>b){

    if(a>b){

        console.log(c+ "," +a+ "," +b);

    }else{

        console.log(c+ "," +b+ "," +a);
    }

}





