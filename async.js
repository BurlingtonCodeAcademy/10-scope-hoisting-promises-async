function delayedMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// async function with await
async function printMessage() {
    const messageOne = await delayedMessage("Message One", 4000);
    console.log(messageOne);
};

function printSomeMessage(message) {
    console.log(message);
}

async function printAnotherMessage() {
    const message = await delayedMessage("Message Two", 1000);
    printSomeMessage(message);
}

printMessage();
printSomeMessage("First Message");
printAnotherMessage();
