function calculation(fn) {
  return new Function('return ' + fn)();
}

const sendCalc = (calc) =>
fetch('/api/calcUpdate',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/JSON'
  },
  body: JSON.stringify(calc),
});

function start(e) {
  e.preventDefault();
  console.log('e is:', e);

  var calcInput = document.getElementById('calcInput').value;
  var calcOutput = calculation(calcInput);
  document.getElementById('answerBox').innerText = 'Answer = ' + calcOutput;
  console.log(calcOutput) 
  console.log(calculation(calcInput));
  const newCalc = {
    calc_content: calcInput,
  };
  sendCalc(newCalc).then((data) => {
    console.log('success!',data)
  }).catch(err => {
    console.log('\nerror', err)
  });
}



document.getElementById('btn').onclick = start;