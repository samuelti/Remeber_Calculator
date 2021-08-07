function calculator(fn){
    return new Function('return'+ fn)()
  };

  const calcInput = document.getElementById('calcInput').value
  
  //evil(calcInput)