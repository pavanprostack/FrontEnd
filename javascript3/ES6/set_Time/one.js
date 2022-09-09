
//setTimeout(1,2)      // it is expecting two orguments.
//setInterval(1,2)      // it is also expecting two orguments.

setTimeout(() => {
    console.log("GM");          // it Executes only one time based on respective time interval(4sec).
}, 4000);

setInterval(()=>{
     console.log("Hello");        // it Executes continuously for every time interval(1sec).
},1000)