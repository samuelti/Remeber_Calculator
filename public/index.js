function calculation(fn) {
  return new Function('return ' + fn)();
}

function start(e) {
  e.preventDefault();
  console.log('e is:', e);

  var calcInput = document.getElementById('calc').value;

  return console.log(calculation(calcInput));
}

document.getElementById('btn').onclick = start;