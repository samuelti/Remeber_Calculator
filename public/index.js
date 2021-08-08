function calculation(fn) {
  return new Function('return ' + fn)();
}

function start(e) {
  e.preventDefault();
  console.log('e is:', e);

  var calcInput = document.getElementById('calcInput').value;
  var calcOutput = calculation(calcInput);
  document.getElementById('answerBox').value = 'Answer = ' + calcOutput;
  console.log(calcOutput)
  return console.log(calculation(calcInput));
}

document.getElementById('btn').onclick = start;