// an example of functional scope
function showMessage(){
    const message = "The cat in the hat sat on a mat";
    console.log(message)
}

showMessage();

var myFavoriteNumber = 42;

function showNumber(){
    console.log(myFavoriteNumber);
}

showNumber();

myFavoriteNumber = 100;
console.log(myFavoriteNumber);

console.log(greet());

function greet(){
    return "Hello to everyone!";
}

let myName = "Winnie the Pooh";

console.log(myName);

const checkNumber = new Promise((resolve, reject) => {
    const number = 6;

    if (number > 5) {
        resolve("The number is greater than 5");
    } else {
        reject("The number is not greater than 5");
    }
});

checkNumber
    .then(message => console.log(message))
    .catch(error => console.log(error))
    .finally(() => console.log("Good job Miguel!"));

const addFive = number => Promise.resolve(number + 5);
const double = number => Promise.resolve(number * 2);

addFive(85)
    .then(double)
    .then(result => console.log(result));

async function fetchData(){
    const data = await "This is the data";
    console.log(data);
}

fetchData();

async function riskyOperation(){
    try {
        const result = await Promise.resolve('operation successful');
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

riskyOperation();