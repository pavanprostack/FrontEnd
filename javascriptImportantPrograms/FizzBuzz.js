// FizzBuzz programming 

// if Any number is divisible by 3 print Fizz
// if Any number is divisible by 5 print Buzz
// if Any number is divisible by 3 & 5 print FizzBuzz


let fizz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}
fizz(20)
