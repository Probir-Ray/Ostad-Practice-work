import Capy, { lift as lft, semiConductor as semi, day as d } from "./index.js";
import City from "./app.js";

console.log(lft);
semi(80397);

const bd = new Capy("Dhaka");
bd.displayCapital("Bangladesh");

const ind = new Capy("Delhi");
ind.displayCapital("India");

console.log(`Today is, ${d}`);

const dk = new City("Bangladesh", "15000 sqKm", "Dhaka");
dk.details();
