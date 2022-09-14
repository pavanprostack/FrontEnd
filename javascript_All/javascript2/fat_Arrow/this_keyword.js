/*

function test(){              // Normal function gives bigger object.
    console.log(this);
}
test();  */



let testing=() => {
    console.log(this);            // Fat Arrow function gives empty object.
}
testing();