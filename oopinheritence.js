class Animal{
  constructor(name, age,color){
    this.name = name;
    this.age = age;
    this.color = color;
  }
  run(){
    console.log(`${this.name} is running`);
  }
  shout(){
    console.log(`${this.name} is shouting`)
  }
  showColor(){
    console.log(`${this.name} has ${this.color} color`)
  }
  
}
class Monkey extends Animal{
  run(){
    console.log(`${this.name} is running`);
  }
  shout(){
    console.log(`${this.name} is shouting`)
  }
  eatBanana(){
    console.log(`${this.name} is eating banana`)
  }
}
let m = new Monkey('Monkey', 10, 'brown');
m.shout();
m.eatBanana();
let a= new Animal('Animal', 10, 'brown');
a.shout();
a.showColor();

