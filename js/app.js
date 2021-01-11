'use strict';

//linter test working

var banana = 42

// get user name and offer greeting

var userName = prompt ('Hey, how\'s it going? What \'s your name pal?');


var questionOne = prompt('Do I live in Washington').toLowerCase();
if(questionOne === 'yes'|| questionOne ==='y'){
  // console.log('you are correct')
  alert('Spot on!'); 
} else if ( questionOne === 'no' || questionOne === 'n'){
  alert ('You are so wrong!');
}

var questionTwo = prompt('Do I like snowboarding?').toLowerCase();
if(questionTwo === 'yes' || questionTwo === 'y') {
    // console.log('That is correct!')
    alert('That\'s also correct');
} else if ( questionTwo === 'no' || questionTwo === 'n'){
  alert ('Wrong! I love it!');
}

var questionThree = prompt('Do I love sushi?').toLowerCase();
if(questionThree === 'yes'|| questionThree ==='y'){
  // console.log('you are correct')
  alert('You\'re on a role!'); 
} else if ( questionThree === 'no' || questionThree === 'n'){
  alert ('PFFFTTTT that doesn\'t sound like me!');
}

var questionFour = prompt('Do I like scubadiving?').toLowerCase();
if(questionFour === 'yes'|| questionFour ==='y'){
  // console.log('you are correct')
  alert('Another one Correct!'); 
} else if ( questionFour === 'no' || questionFour === 'n'){
  alert ('Wow, you got it.......NOT!');
}

var questionFive = prompt('Do I put my family first?').toLowerCase();
if(questionFive === 'yes'|| questionFive ==='y'){
  // console.log('you are correct')
  alert('Amazing!'); 
} else if ( questionFive === 'no' || questionFive === 'n'){
  alert ('You need to rethink that and come back with an absolute YES!');
}