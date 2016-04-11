// declaration
var myName ;
console.log("value of myName before defination : " + myName);
//defination
myName = "vikash";
console.log("value after defination : " + myName);

//declartion plus defination
var myWifeName = "Rohini";
console.log("declartion plus defination" + myWifeName);

// error: undefined variable , you can't read undefined variable

// error : console.log(myAge);

// but you can write undefined veriable 
myAge = 30; 
console.log(myAge);

// set the vlaue to null
var myAddress ; 
console.log("myAddress is not assigned vaue is " + myAddress);
if(myAddress !== undefined) {
  console.log("myaddress is not undefined");
} else {
  console.log("myaddress is undefined");
}

myAddress = null;
console.log("myAddress is assigned to null value is " + myAddress);
if(myAddress !== null) {
  console.log("myaddress is not null");
} else {
  console.log("myaddress is null");
}







