// var with global scope
var globalVariable = "I am everywhere!";

console.log("1", globalVariable);

function myFunction(){
    console.log("2", globalVariable);

    const functionVariable = "I am only in this function"; // accessing the global variable

    console.log("3", functionVariable);

    if(true){
        let blockVariable = "I am only in this block";
        console.log("4", blockVariable);
        console.log("5", functionVariable);
        console.log("6", globalVariable);
    }

    // console.log(blockVariable); // attempting to, but failing to access a block scoped variable
}

myFunction();

// console.log(functionVariable); // attempting to, but failing to access a functionally scoped variable
// console.log(blockVariable); // attempting to, but failing to access a block scoped variable