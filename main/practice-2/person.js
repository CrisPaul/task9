// Write your code here
module.exports = class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        if(Object.getPrototypeOf(this).hasOwnProperty('nextID')){
            this.id = Object.getPrototypeOf(this).nextID++;
        }else{
            this.id = 0;
            Object.getPrototypeOf(this).nextID   = 1;
        }
    }
    introduce(){
        return 'My name is '+ this.name +'. I am '+ this.age +' years old.';
    }
};