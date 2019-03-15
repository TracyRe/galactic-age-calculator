export class AgePlanet {
  constructor(age) {
    this.age = age;
  }

  ageMercury() {
    const result = this.age / .24;
    const planetAge = result.toFixed(2);
    return planetAge;
  }

  ageVenus() {
    const result = this.age / .62;
    const planetAge = result.toFixed(2);
    return planetAge;
  }

  ageMars() {
    const result = this.age / 1.88;
    const planetAge = result.toFixed(2);
    return planetAge;
  }

  ageJupiter() {
    const result = this.age / 11.86;
    const planetAge = result.toFixed(2);
    return planetAge;
  }

}
