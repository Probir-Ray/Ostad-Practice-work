"use strict";

// 21 Anonymous functions
const mks = function (a, b) {
  return a * b;
};
console.log(mks(2, 4));

// 22 Arrow Function
const age = (birthYear, now) => now - birthYear;
console.log(`Age is: ${age(1997, 2022)}`);

// 24 Simple Arrays
const arr = [2, 3, 7, "HBC", true, undefined, null];
const arrOne = new Array("C", 11, 99, NaN, "B", 2.35);
for (let el of arrOne) {
  console.log(el);
}
console.log(".........................");

// 25 Multidimensional Arrays
const bdCity = ["Dhaka", "Chittagong", "Rangpur"];
const indCity = ["Kolkata", "Delhi", "Mumbai"];
const countriesCity = [bdCity, indCity];
console.log(countriesCity[1][1]);
console.log(".........................");

// 26 Array de-structuring
const capitals = ["Bangladesh", "India", "Nepal", "Pakistan", "Sri Lanka"];
const [, b, , , d] = capitals;
console.log(b, d);
console.log(".........................");

// 27 ES6 Map
const aOne = new Map();
aOne.set("one", "Bangladesh");
aOne.set("two", "India");
aOne.set("three", "Sri Lanka");
aOne.set("four", "Nepal");

console.log(aOne.values());
console.log(aOne.keys());
console.log(".........................");
for (let el of aOne.values()) {
  // for (let el of aOne.keys()) {
  console.log(el);
}
console.log(".........................");
console.log(aOne.get("four"));
console.log(aOne.entries());

console.log(".........................");
// aOne.delete("three");
// aOne.clear();
// console.log(aOne.has("five"));
console.log(aOne.get("one"));
// console.log(aOne.entries());
console.log(".......................................");

// 30 ES6 Set
const setOne = new Set();
setOne.add(23);
setOne.add(true);
setOne.add(false);
setOne.add([32, 33, 45]);

// const colors = new Set(["Green", "Red", "Blue", "Cyan", "Magenta"]);
// setOne.clear();
// setOne.delete(23);
console.log(setOne.has(25));
console.log(setOne.values);
console.log(setOne.size);
