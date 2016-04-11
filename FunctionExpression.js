/*
"use strict";

function foo () {
      console.log("inside normal function foo");
}

foo();


//****** function with return ****
function additionWithParam ( a , b ) {  
      var c = a + b; 
      return c; 
}
var num1 = 11; 
var num2 = 22; 
var num3 = 33; 
var sum  = addition (num1,num2 ); 

console.log("sum of 11 + 22 is " + sum);
*/

var additionWithoutParam = function ( ) {
      // java script passes hidden arguments arguments as part of function call 
      return arguments[0] + arguments[1] ;
      
};

var return5 = function ( ) {
      return 5; 
};
var return15 = function ( ) {
      return 15; 
};

 

////////////////Function Expression//////////////////////////////
var barFunExpression =  function bar( varFun, a , b) {
      console.log("inside barFunExpression");
      return varFun(a,b);
}

// barFunExpression is only store defination of function it will not invoke the function.
///console.log(barFunExpression);
// to invoke the function use () to call it like barFunExpression()
var retVal = barFunExpression(additionWithoutParam, 1 , 2 );
// return value will be stored in retval like any other functin call
console.log("retval " + retVal);


/*
//////////////Annonimous Function Expression/////

var barFun =  function (fun) {
      console.log("inside Annonimous Funtion Expression barFun");
}

console.log(barFun);

*/
///////////////////////////
/*

({
      console.log("inside Annonimous Funtion");
})();
*/

