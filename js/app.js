'use strict';

// Ask for the user's anme and greet the user by that name in an alert
var userName = prompt('Hi! What is your name?');

// Log that interaction to the console
alert('hi ' + userName + ' welcome!');

// log to the console
console.log('user said their name is ' + userName);

// Ask the first guessing game question
var answer1 = prompt('do you think I have any sibilings?').toLowerCase();

// User guesses "yes" "no" or "Y" "N"
if (answer1 === 'yes' || answer1 === 'y') {
    alert('You got it right!');
    console.log(userName + ' got the right answer! Which is yes!');
    } else {
        alert('Noooopppeeeee');
        console.log(userName + ' got the wrong answer! Which is no!');
}



// tell user if they are wrong or right
//  next question

