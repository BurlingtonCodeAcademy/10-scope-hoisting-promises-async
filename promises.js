// simulation of an async operation like fetching data from an API
function fetchSomeData(shouldSucceed, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Here is your data!!!👍");
            } else {
                reject("Something went wrong!!!👎");
            }
        }, delay);
    })
};

fetchSomeData(true, 2000)
    .then(function (data) {
        console.log(data)
    })
    .then(()=> console.log("This is a second then"))
    .then(()=> console.log("This is a third then"))
    .then(()=> console.log("This is a fourth then"))
    .finally(()=> console.log("We are finally done!"))
    .catch(error => console.log(error));

fetchSomeData(false, 8000)
    .then(data => console.log(data))
    .catch(error => console.log(error));
