'use strict';

// get user name and offer greeting

var userName = prompt('Hey, how\'s it going? What\'s your name pal?');
alert('Welcome ' + userName + ' to my website');

// question one
var answerOne = prompt('Do I live in Washington').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('you are correct')
  alert('Spot on!');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('You are so wrong!');
}

// question two
var answerTwo = prompt('Do I like snowboarding?').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  // console.log('That is correct!')
  alert('That\'s also correct');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Wrong! I love it!');
}

// question three
var answerThree = prompt('Do I love sushi?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  // console.log('you are correct')
  alert('You\'re on a role!');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('PFFFTTTT that doesn\'t sound like me!');
}

// question four
var answerFour = prompt('Do I like scubadiving?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  // console.log('you are correct')
  alert('Another one Correct!');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('Wow, you got it.......NOT!');
}

// question five
var answerFive = prompt('Do I put my family first?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  // console.log('you are correct')
  alert('Amazing!');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('You need to rethink that and come back with an absolute YES!');
}

// var userName = prompt ('Well that\'s a little bit about me, I hope you enjoyed my website?');
alert('Goodbye, ' + userName + ' I hope you enjoyed my website.');
