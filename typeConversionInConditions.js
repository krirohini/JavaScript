// data types 
/* Number

  
*/

"use strict"

function isValueTrue (varValue, varName) {
    if(varValue) {
      console.log(varName + " is true");
    } else {
      console.log(varName + " is false");
    }
}

var boolTrue = true;
isValueTrue(boolTrue, "boolTrue");
var boolFalse = false;
isValueTrue(boolFalse, "boolFalse");

//number conversion to boolean , 0 is false all other value is true
var numFalse = 0;
isValueTrue(numFalse, "numFalse");
var numTrue1 = 11;
isValueTrue(numTrue1, "numTrue1");
var numTrue2 = -11;
isValueTrue(numTrue2, "numTrue2");

//string conversion to boolean , empty string is false, else true 
var strFalse = "";
isValueTrue(strFalse, "strFalse");
var strTrue1 = "xxx";
isValueTrue(strTrue1, "strTrue1");
var strTrue2 = "false";
isValueTrue(strTrue2, "strTrue2");

var strTrue3 = "  ";
isValueTrue(strTrue3, "strTrue3");

// undefine is false
var varUndefined; 
isValueTrue(varUndefined, "varUndefined");

// null is false 
var varNull = null; 
isValueTrue(varNull, "varNull");


/// explicit conversion of string to number
var varNaN = "vikash";
console.log(Number(varNaN));

var varNumber = "10";
console.log(Number(varNumber));

var number = 20; 
console.log(Number(number));

var varBoolTrue = true; 
console.log("varBoolTrue  will print " + Number(varBoolTrue));

var varBoolFalse = false; 
console.log("varBoolFalse will false " + Number(varBoolFalse));


/// explicit conversion of number to string










