const notifyByEmail = (emailAddress) => {
    return `Email sent to: ${emailAddress}`;
}

const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
}

const notify = (phoneOrEmail, notifyFunction) => {
    return notifyFunction(phoneOrEmail);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));