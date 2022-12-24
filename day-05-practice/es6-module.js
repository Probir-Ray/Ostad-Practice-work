const lift = "Acronous Lift";
const day = "Saturday";

function semiConductor(model) {
  console.log(model);
}
export { lift, semiConductor, day };

class Capital {
  constructor(name) {
    this.capitalName = name;
  }

  displayCapital(countryName) {
    console.log(`${this.capitalName} is the capital of ${countryName}`);
  }
}

export default Capital;
