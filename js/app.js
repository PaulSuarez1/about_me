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
    console.log(userName + ' got the right answer! Which is ' + answer1 + '!');
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
    console.log(userName + ' got the right answer! Which is ' + answer2 + '!');
    document.write('<br><br>What is my favorite color? The answer is ' + answer2 + '!!! Right on! ' + userName + ', you know me so well!');

    } else {
        alert('Noooopppeeeee');
        console.log(userName + ' got the wrong answer!');
        document.write('<br><br>What is my favorite color? The answer is not ' + answer2 + '!!! So close! ' + userName + ', do you even know me bro?');
}

// Ask the guessing game question
var answer3 = prompt(userName + ', how old am I?').toLowerCase();

// User guesses "yes" "no" or "Y" "N"
if (answer3 === '28') {
    alert('You got it right!');
    console.log(userName + ' got the right answer!');
    document.write('<br><br>How old am I? The answer is ' + answer3 + '!!! Holy smokes! ' + userName + ', how did you know that?!');

    } else if (answer3 > '28') {
        alert('Noooopppeeeee');
    console.log(userName + ' got the wrong answer');
    document.write('<br><br>how old am I? The answer is not freaking ' + answer3 + '!!! Do I look like a grandpa to you??? SUPER RUDE! ' + userName + ', you are kind of a jerk!');
    
    } else {
        alert('Noooopppeeeee');
        console.log(userName + ' got the wrong answer!');
        document.write('<br><br>how old am I? The answer is not freaking ' + answer3 + '!!! Do I look like a baby or something? DO YOU NOT SEE THE BEARD????? ' + userName + ', you are kind of a jerk!');
}

//
// Ask the guessing game question
var answer4 = prompt(userName + ', am I more of a beer, wine, or liquor guy?').toLowerCase();

// User guesses "yes" "no" or "Y" "N"
if (answer4 === 'beer') {
    alert('You got it right!');
    console.log(userName + ' got the right answer!');
    document.write('<br><br>Am I more of a beer, wine, or liquor guy? The answer is ' + answer4 + '!!! !@#$ YEAH! ' + userName + ', I loooooooovvvvveeeeeeeeee ' + answer4 + '!');

    } else if (answer4 === 'liquor') {
        alert('Eh, yeah, I guess...');
    console.log(userName + ' got a neutral answer');
    document.write('<br><br>Am I more of a beer, wine, or liquor guy? You guessed ' + answer4 + ' and that is pretty close, I guess.... ' + userName + ', maybe you should guess again next time!');    
    } else {
        alert('Noooopppeeeee');
        console.log(userName + ' got the wrong answer!');
        document.write('<br><br>Am I more of a beer, wine, or liquor guy? You guessed ' + answer4 + ' and that is very wrong ' + userName + ', sorry I can not be seen with you at da club...');    
    }


    //
    //
    // Ask the guessing game question
var answer5 = prompt(userName + ', this is an easy one and it is not really about me, but I will ask you anyway. What year is it?');

// User guesses "yes" "no" or "Y" "N"
if (answer5 === '2018') {
    alert('You got it right!');
    console.log(userName + ' got the right answer!');
    document.write('<br><br>' + answer5 + ' is right!!!! ' + userName + ', you are a bad***!');

    } else if (answer5 > '2018') {
        alert('wtf dude...');
    console.log(userName + ' got a wrong answer');
    document.write('<br><br>What year is it? You guessed ' + answer5 + ' and that is way too far into the future. ' + userName + ', hop back on your time machine...');    
    } else {
        alert('Noooopppeeeee');
        console.log(userName + ' got the wrong answer!');
        document.write('<br><br>What year is it? You guessed ' + answer5 + ' ... QUIT LIVING IN THE PAST! ' + userName + ', please grow up a little!');    
    }

    var answer6;
    var lowGuess = 0;
    var highGuess = 0;
    var howManyTries = 0;
    var answer6;

while(answer6 !== '87' && howManyTries < 4) { 
    answer6 = prompt(userName + ', lets play a guessing game. I am thinking of a number between 1 and 100. What do you think it is?');
    howManyTries = lowGuess + highGuess + 1;
    // User guesses "yes" "no" or "Y" "N"
    if (answer6 === '87') {
            alert('You got it right!');
            console.log(userName + ' Good job! About time... the answer is in fact ' + answer6 + '!');
            document.write('<br><br> Guess the number Im thinking about? ' + userName + ', Good job! About time... You guessed way too low ' + lowGuess + ' times and way too high ' + highGuess + ' times. Plus the right time, that is a total of ' + howManyTries + ' tries. The answer is in fact ' + answer6 + '!');
    
        } else if (howManyTries >= 4) {
                alert('took more than 4 tries');
                document.write('<br><br><br>Fail. took more than 4 tries');

        } else if (answer6 > 87) {
            highGuess++;
            alert('Too high! Try again!');
            console.log(userName + ' guessed a number that was too high');
            
        } else {
            lowGuess++;
            alert('Too low! Try again!');
            console.log(userName + ' guessed a number that was too low');
            
        }
    }