
class Parent {
    constructor(){
        this.fathername = "naimama";
    }
}
class Child extends Parent {
    constructor(name){
        super();

        this.name = name;
        
    }
} 

const baby = new Child('arnold');
console.log(baby);