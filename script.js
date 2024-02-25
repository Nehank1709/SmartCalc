function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearLastCharacter() {
    var display = document.getElementById('display');
    var outputString = ["Error", "Infinity", "undefined"]
    if (!outputString.includes(display.value)){
        
        display.value = display.value.slice(0, -1);
    }
    else{
        this.clearDisplay()
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = display.value.replace(/x/g, "*");
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }

  