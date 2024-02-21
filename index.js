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

    const messageThree = await delayedMessage("Message Three", 1000);
    console.log(messageThree);
};

async function printAnotherMessage() {
    const messageTwo = await delayedMessage("Message Two", 2000);
    console.log(messageTwo);
}

printAnotherMessage();
printMessage();
