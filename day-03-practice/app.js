const bd = {
  capital: "Dhaka",
  area: "1.47 lac",
  population: "185 million",
};

for (let el in bd) {
  //   console.log(bd[el]);
}

const countries = ["BD", "IND", "NPL", "PAK", "SRL"];
for (let el of countries) {
  //   console.log(el);
}

// 19 Rest Parameters Functions
const sum = (...arr) => {
  //   console.log(arr);
  //   console.log(arr[4]);
};

sum(3, 2, 5, 33, 31, 13, 3, 7, 9, 2);

// 20 Function Returns
const multiply = (a, b) => a * b;
const one = multiply(4, 7);
console.log(one * 11);
