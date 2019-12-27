//This exercise from TechSith tutorials on youTube
//1. One way
//baseClass
let Job = function() {
  this.pays = true;
};

//prototype method
Job.prototype.print = function() {
  console.log(this.title, this.pays, 'Executing from parent class Job');
};

//subclass
let TechJob = function(title) {
  //to inherit Job class properties we can use call
  Job.call(this); //arg 'this' is this class
  this.title = title;
};

//now to inherit the methods from Job which became parent class to TechJob we can do next =>
TechJob.prototype = Object.create(Job.prototype);
//al we have to do now to set the constructor
TechJob.prototype.constructor = TechJob;
console.dir(TechJob);

//2.
//----------------------------------
//lets create object from subclasses
let softwarePos1 = new TechJob('JavaScript Programmer', true);
let softwarePos2 = new TechJob('vb Programmer', false);

console.log(softwarePos1.print()); //print method inherited from parent class Job
console.log(softwarePos2.print()); //print method inherited from parent class Job

//let create subclass own print() method

TechJob.prototype.print = function() {
  console.log(this.title, this.pays, 'Executing from subclass TechJob');
};
console.log(softwarePos1.print()); //print method inherited from parent class Job
console.log(softwarePos2.print()); //print method inherited from parent class Job
//subclass method does not actually over wrights the parent method,it shadows the parent method.
//When we call the method on child object it looks first in,if doesn't finds then looks parent class if doesn't finds it looks grand parent and so on until it finds
//if it doesn't finds it then returns undefined

//3. Second way is we can add method to a master Object from where we can inherit also
//.-=====================================================
//lets remove the method from previous exercise and reuse the same example
let TechJob2 = function(title) {
  //to inherit Job class properties we can use call
  Job.call(this); //arg 'this' is this class
  this.title = title;
};

//lets create print method in the master Object
Object.prototype.print = function() {
  console.log(this.title, this.pays, 'Executing from Master Object');
};

let softwarePos3 = new TechJob2('JavaScript Programmer', true);
let softwarePos4 = new TechJob2('vb Programmer', false);

console.log(softwarePos3.print());
console.log(softwarePos4.print());
