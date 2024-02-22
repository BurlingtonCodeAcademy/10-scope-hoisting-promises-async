let myVar = "Hi guys!"

console.log(myVar);

// let myVar = "Hi guys!" // causes error unless above the invocation


sayHello();

function sayHello() {
    console.log("Hello from auto hoisted function!");
}