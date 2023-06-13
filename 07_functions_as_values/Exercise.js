const lowercaseMessage = (sentence) => {
    return sentence.toLowerCase();
}

const transform = (sentence, transformFunction) => {
    return transformFunction(sentence);
}

 console.log(transform('WHY ARE YOU SHOUTING?', lowercaseMessage));

