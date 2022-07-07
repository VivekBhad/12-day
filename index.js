// constructor functions
// nature - function
// outout - Object

// let str = new String('masai')

// blueorint - CF

// arrow function - lihght function

// function student(n){
//     this.name = n
//     this.batch = 'web18';

// }
// let s1 = new student('raj');

// // JS Array
// student.prototype.sayname = function () {
//     console.log(this)
// }
// s1.sayname();
// // console.log('s1:',s1);


class Stack {
    constructor() {
      this.stack = [];
    }
    push(item) {
      this.stack.push(item);
    }
    pop() {
      this.stack.pop();
    }
   }
   
// 2   //


   function Queue() {
    this.queue = {};
    this.tail = 0;
    this.head = 0;
  }
  
  // Add an element to the end of the queue.
  Queue.prototype.enqueue = function(element) {
    this.queue[this.tail++] = element;
  }
  
  // Delete the first element of the queue.
  Queue.prototype.dequeue = function() {
    if (this.tail === this.head)
        return undefined
  
    var element = this.queue[this.head];
    delete element;
    return element;
  }

// __________________________________________________________
// forEach
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
// ____________________________________________________________
// forEach
const number = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
// _________________________________________________
// map
const numbe = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

// +_________________________________________________+
// map
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// filter

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// reduce

const numb = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}
// __________________________________________________________________
const num = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++