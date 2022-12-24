class Cities {
  constructor(name, area, country) {
    this.name = name;
    this.area = area;
    this.country = country;
  }

  details() {
    console.log(this.name, this.area, this.country);
  }
}

export default Cities;
