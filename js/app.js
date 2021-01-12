'use strict';

// get user name and offer greeting

var userName = prompt('Hey, how\'s it going? What\'s your name pal?');
alert('Welcome ' + userName + ' to my website');

var score = 0;

// question one
var answerOne = prompt('Do I live in Washington').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  score++;
  // console.log('you are correct');
  alert('Spot on!');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('You are so wrong!');
}

// question two
var answerTwo = prompt('Do I like snowboarding?').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  score++;
  // console.log('That is correct!');
  alert('That\'s also correct');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Wrong! I love it!');
}

// question three
var answerThree = prompt('Do I love sushi?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  score++;
  // console.log('you are correct');
  alert('You\'re on a roll!');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('PFFFTTTT that doesn\'t sound like me!');
}

// question four
var answerFour = prompt('Do I like scubadiving?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  score++;
  // console.log('you are correct');
  alert('Another one Correct!');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('Wow, you got it.......NOT!');
}

// question five
var answerFive = prompt('Do I put my family first?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  score++;
  // console.log('you are correct');
  alert('Amazing!');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('You need to rethink that and come back with an absolute YES!');
}

// question six
for (var i = 1; i < 5; i++) {
  var answerSix = prompt('Pick a number between 1 and 20. You get 4 guesses, so make them count!');
  if(answerSix === '9') {
    alert('You got it right! Congratulations!');
    score++;
    break;
    // console.log('Sorry, the correct answer was 9');
  }
  if(i === 4) {
    alert('Sorry, the correct answer was 9');
    break;
  } else if (answerSix < 9) {
    alert('Too low!');
  } else if (answerSix > 9) {
    alert('Too high!');
  }
  answerSix = prompt('Pick a number between 1 and 20. You get 4 guesses, so make them count!');
}

// question seven

var tooLow = ['1', '3', '7', '9'];

for(var j = 0; j < 7; j++){
  var answerSeven = prompt('Guess what my favorite numbers are!');
  // console.log(answerSeven)
  if(j === 5) {
    alert('Sorry, the correct answer\'s were 1, 3, 7, 9.');
    break;
  }
  if(answerSeven === tooLow[0] || answerSeven === tooLow[1] || answerSeven === tooLow[2] || answerSeven === tooLow[3] ){
    score++;
    alert('That\'s right!');
    break;
  } else{
    alert('Sorry, try again!');
  }
}

alert(`Thanks and I hope you enjoyed playing. Your total score of ${score} of 7!`);
console.log(score);

// var userName = prompt ('Well that\'s a little bit about me, I hope you enjoyed my website?');

alert('Goodbye, ' + userName + ' I hope you enjoyed my website.');
