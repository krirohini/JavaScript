
var cars = ["Saab", "Volvo", "BMW"];

console.log("type of cars : " + typeof cars);
console.log("is cars Array : " + Array.isArray(cars));
console.log("length of cars Array : " +cars.length);
var i;
for (i = 0; i < cars.length; i++) {
  console.log("cars[ " +  i + "] =  "  + cars[i]);
}


console.log(cars);

cars[3] = 46;
console.log(cars);

cars[4] = false;
console.log(cars);

cars.push("Honda");
console.log(cars);
console.log("after push Honda " + cars.length);
var car = cars.pop();
console.log("after pop " + cars);
console.log(car);

cars.unshift("Toyota");
console.log("after unshift Toyota " + cars);
var carShift = cars.shift();
console.log("carShift " + carShift);
console.log("after shift " + cars);

console.log(cars.length);
console.log("tostring " + cars.toString());
console.log("join " +cars.join("*"));




