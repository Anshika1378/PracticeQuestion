class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a); // convert input to number
    this.b = parseFloat(b);
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b === 0) return "Error: Division by zero";
        return this.a / this.b;
      default:
        return "Invalid operation";
    }
  }
}

function performCalculation() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const operation = document.getElementById("operation").value;

  const calc = new Calculator(a, b, operation);
  document.getElementById("result").innerText = `Result: ${calc.calculate()}`;
}
