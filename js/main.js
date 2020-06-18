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
  run() {
    this.equation.push(calc.currNum)
    const firstNum = parseInt(this.equation[0])
    const secondNum = parseInt(this.equation[2])
    if (this.equation.length > 2){
      switch (this.equation[1]){
        case '+':
        this.add(firstNum, secondNum)
        break;
        case '-':
        this.subtract(firstNum, secondNum)
        break;
        case '*':
        this.multiply(firstNum, secondNum)
        break;
        case '/':
        this.divide(firstNum, secondNum)
        break;
      }
    }
  }
  add(a,b) {
    this.resolve(a + b)
  }
  subtract(a,b) {
    this.resolve(a - b)
  }
  multiply(a,b) {
    this.resolve(a * b)
  }
  divide(a,b) {
    this.resolve(a / b)
  }
  resolve(num) {
    document.querySelector('#window').innerHTML = num;
    this.complete = !this.complete
    this.equation = [];
    this.currNum = "";
    console.log(calc);
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
    } else if ( type === 'number') {
      calc.getNum(button)
    } else {
      calc.run()
    }
  })
});
