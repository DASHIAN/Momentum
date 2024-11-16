const a = 5;
const b = 2;
let myName = "Dash"; //const의 경우 재정의 불가능. let타입 사용 시 변수 재정의 가능. const, let 발명되기 이전에는 var 사용
//always const, sometimes let, never var

console.log(a + b);
console.log("My name is " + myName);

myName = "Yes";
console.log("My new name is " + myName);

const amIDash = null;
let something;
console.log(amIDash, something);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const daysOfWeek = [mon, tue, wed];
console.log(daysOfWeek);

const thurs = "thurs";
daysOfWeek.push(thurs);

const player = {
    name : "Dash",
    points : 10,
    fat : false,
};

console.log(player);
console.log(player.name);

player.lastName="Kim";
console.log(player);
player.points = player.points + 10;
console.log(player);

function sayHello(nameOfPerson) {
    console.log(nameOfPerson);
}

sayHello("Dash");
sayHello("Kim");
sayHello("Lee");

function plus(a, b) {
    console.log(a + b);
}
plus(5, 8);

const calculator = {
    add : function(a, b) {
        console.log(a + b);
    },
    minus : function(a, b){
        console.log(a - b);
    },
    divide : function(a, b) {
        console.log(a / b);
    },
    multiply : function(a, b) {
        console.log(a * b);
    },
    powerOf : function(a, b) {
        console.log(a**b);
    }
}

calculator.add(1, 2);
calculator.minus(3, 2);
calculator.divide(2, 1);
calculator.multiply(3, 4);
calculator.powerOf(2, 3);

const calculator2 = {
    add : function(a, b) {
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    divide : function(a, b) {
        return a / b;
    },
    multiply : function(a, b) {
        return a * b;
    },
    powerOf : function(a, b) {
        return a**b;
    }
}

const plusResult = calculator2.add(1, 2);
console.log(plusResult);



