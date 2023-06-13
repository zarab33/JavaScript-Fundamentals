const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (delay, callAfunction) => {
    setTimeout(callAfunction, delay * 1000);
}

executeAfterDelay(5, printHello);

