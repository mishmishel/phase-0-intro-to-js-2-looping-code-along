// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    let message = []
    for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message
}
    
writeCards(names, "surprise");

function countDown(number) { 
    while (number >= 0) {
        console.log(number--);
    }
}
countDown(10)



