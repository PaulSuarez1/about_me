'use strict';

// Ask for the user's anme and greet the user by that name in an alert
var userName = prompt('Hi! What is your name?');
console.log('user said their name is ' + userName);

alert('hi ' + userName + ' welcome!');
document.write('<br>Nice to meet you ' + userName + '! This is a game that will teach you more about me.');

// Ask the guessing game question
var answer1 = prompt(userName + ', do you think I have any sibilings?').toLowerCase();

// User guesses "yes" "no" or "Y" "N"
if (answer1 === 'yes' || answer1 === 'y') {
    alert('You got it right!');
    console.log(userName + ' got the right answer! Which is yes!');
    document.write('<br><br>Do I have sibilings? The answer is YES!!! Right on! ' + userName + '! That is correct! I do have sibilings.');

    } else {
        alert('Noooopppeeeee');
        console.log(userName + ' got the wrong answer! Which is no!');
        document.write('<br><br>Do I have sibilings? The answer is YES!!! Ouch! Sorry ' + userName + ', that is verrrryyy wrong! I do have sibilings.');
}

// Ask the guessing game question
var answer2 = prompt(userName + ', do you think I prefer blue, red, green, or yellow?').toLowerCase();

// User guesses "yes" "no" or "Y" "N"
if (answer2 === 'green') {
    alert('You got it right!');
    console.log(userName + ' got the right answer! Which is yes!');
    document.write('<br><br>What is my favorite color? The answer is ' + answer2 + '!!! Right on! ' + userName + ', you know me so well!');

    } else {
        alert('Noooopppeeeee');
        console.log(userName + ' got the wrong answer!');
        document.write('<br><br>What is my favorite color? The answer is not ' + answer2 + '!!! So close! ' + userName + ', do you even know me bro?');
}



// tell user if they are wrong or right
//  next question

