function scuberGreetingForFeet(someValue){
  let response
  if (someValue <= 400 && someValue > 0) {
    response = 'This one is on me!'
  }
  else if (someValue > 400 && someValue <= 2000) {
    response = 'That will be twenty bucks.'
  }
  else if (someValue > 2000 && someValue <= 2500) {
    response = 'I will gladly take your thirty bucks.'
  }
  else {
    response = 'No can do.'
  }
  return response;
}

function ternaryCheckCity(someCity){
  let answer;
  someCity === 'NYC' ? (answer = 'Ok, sounds good.') : (answer = 'No go.');
  return answer;
}

function switchOnCharmFromTip(someTip){
  let reply;
  switch (someTip) {
    case 'generous' :
      reply = 'Thank you so much.';
      break;
    case 'not as generous' :
      reply = 'Thank you.';
      break;
    default :
      reply = 'Bye.';
      break;
  }
  return reply;
}