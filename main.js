class Calculator {
  constructor(prevOpTxt, currOpTxt) {
    this.prevOpTxt = prevOpTxt;
    this.currOpTxt = currOpTxt;
    this.clear;
  }
  clear() {
    this.prevOp = " ";
    this.currOp = " ";
    this.operation = " ";
  }

  delete() {
    console.log(this.currOp);
    this.currOp = this.currOp.toString();
    console.log(this.currOp);
    this.currOp = this.currOp.substring(0, this.currOp.length - 1);
    return this.currOp;
  }

  appendNumber(number) {
    if (this.currOp === undefined) {
      this.currOp = number;
    } else {
      this.currOp = this.currOp + number;
    }
  }

  chooseOperation(operation) {
    if (this.currOp === "") return;
    if (this.prevOp !== "") {
      this.compute();
    }
    this.operation = operation;
    this.prevOp = this.currOp;
    this.prevOpTxt.innerText = this.prevOp;
    this.currOp = "";
  }

  updateDisplay(isEquals) {
    if (isEquals) {
      //statement checks if equals was pressed (true or false)
      this.currOpTxt.innerText = this.currOp;
      this.prevOpTxt.innerText = `${this.prevOp} ${this.operation} ${currOpStorage}`;
    } else {
      this.currOpTxt.innerText = this.currOp;

      if (
        this.prevOp === undefined &&
        this.operation === undefined &&
        isEquals !== true
      ) {
        //nested checks value of prevOp & operation to ensure undefined is not returned
        return;
      } else {
        this.prevOpTxt.innerText = `${this.prevOp} ${this.operation}`;
        console.log("some how it got here");
      }
    }
  }

  compute(operation) {
    currOpStorage = this.currOp; // store currOp value to display in prevOp later
    //calculation is determined by the value of the operation
    switch (operation) {
      case "÷":
        this.currOp =
          parseFloat(this.prevOp) / parseFloat(this.currOpTxt.innerText);
        break;
      case "*":
        this.currOp =
          parseFloat(this.prevOp) * parseFloat(this.currOpTxt.innerText);
        break;
      case "+":
        this.currOp =
          parseFloat(this.prevOp) + parseFloat(this.currOpTxt.innerText);
        break;
      case "-":
        this.currOp =
          parseFloat(this.prevOp) - parseFloat(this.currOpTxt.innerText);
        break;
    }
  }
}

const numButtons = document.querySelectorAll("[data-number]");
const opButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const prevOpTxt = document.querySelector("[data-prev-op]");
const currOpTxt = document.querySelector("[data-curr-op]");

const calculator = new Calculator(prevOpTxt, currOpTxt);

let operationValue = " ";
let currOpStorage = " ";

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operationValue = button.innerText;
    calculator.chooseOperation(operationValue);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
  calculator.compute(operationValue);
  calculator.updateDisplay(true);
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

console.log(deleteButton.innerText);
