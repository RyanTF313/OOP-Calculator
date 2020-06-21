class Calculator {
  constructor() {
    this.equation = [];
    this.currNum = "";
    this.complete = false;
  }
  getNum(num){
    this.currNum += num
    this.show()
  }
  show() {
    document.querySelector('#window').innerHTML = this.currNum;
  }
  clear() {
    document.querySelector('#window').innerHTML = "";
    this.currNum = "";
  }

  pemdas(array) {
    let equations = ["*", "/", "+", "-"]

    for (let i = 0; i < equations.length; i++){
      let equat = [array[array.indexOf(equations[i])-1],array[array.indexOf(equations[i])], array[array.indexOf(equations[i])+1]]
      console.log(equat);
      if (array.indexOf(equations[i]) >= 0){
        array.splice(array.indexOf(equations[i])-1, 3, this.run(equat))
      }
    }
    return this.resolve(array[0])
  }

  run(eq) {
    const firstNum = typeof eq[0] === "string" ? parseInt(eq[0]) : eq[0]
    const secondNum = typeof eq[2] === "string" ? parseInt(eq[2]) : eq[2]

    if (eq.length > 2){
      console.log(eq[1]);
      switch (eq[1]){
        case '+':
        return this.add(firstNum, secondNum)
        break;
        case '-':
        return this.subtract(firstNum, secondNum)
        break;
        case '*':
        return this.multiply(firstNum, secondNum)
        break;
        case '/':
        return this.divide(firstNum, secondNum)
        break;
      }
    }
  }

  add(a,b) {
    return (a + b)
  }
  subtract(a,b) {
    return (a - b)
  }
  multiply(a,b) {
    return (a * b)
  }
  divide(a,b) {
    return (a / b)
  }
  resolve(num) {
    document.querySelector('#window').innerHTML = num;
    this.complete = !this.complete
    this.equation = [];
    this.currNum = "";
  }
}


const calc = new Calculator

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (event)=>{
    const button = event.target.dataset.button
    const type = event.target.dataset.type

    if (calc.complete){
      calc.clear()
      calc.complete = !calc.complete
    }

    if (type === 'equation'){
      calc.equation.push(calc.currNum,button)
      calc.clear()
    } else if ( type === 'number' || type === 'decimal') {
      calc.getNum(button)
    } else {
      calc.equation.push(calc.currNum)
      calc.pemdas(calc.equation)
    }
  })
});
