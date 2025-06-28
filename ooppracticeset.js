class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  multiply(nalka) {
    this.real = this.real * nalka.real;
    this.imaginary = this.imaginary * nalka.imaginary;
  }
}

let a = new Complex(1, 2);
let b=new Complex(3,4);
a.multiply(b);
console.log(`${a.real-a.imaginary}`)
