class Animal{
    constructor(name){
        this.name = Animal.capitalize(name)
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
  static capitalize(name){
    return name.charAt(0).toUpperCase() + name.substr(1,name.length);
  }
}
let a=new Animal('dog');
a.speak();