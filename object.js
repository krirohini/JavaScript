
var  person = {
      "Firstname" : "vikash",
      "LastName" : "Kumar",
      "age" : 30,
      getFullName : function () {
           return this.Firstname + " " + this.LastName;
      }
};

console.log("name " + person.Firstname);
console.log( " Name as []" + person["Firstname"]);
console.log("Age " + person.age);


person.middleName = "Gupta";
person.middleName = "";
console.log( "before delete middle name" + person.toString());
delete person.middleName ;
console.log( "after delete middle name" + person.toString());

console.log( "Full Name " + person.getFullName());


