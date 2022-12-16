import { foodItems } from "./foodItems.js";

foodItems.map((item, i) => {
  let itemName = item.name;
  let itemPrice = item.price;

  let itemOutput = `${i+1} => Item name is: ${itemName} and item price is: \t Tk. ${itemPrice}.00`;
  console.log(itemOutput);
});
