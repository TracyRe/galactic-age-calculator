export class AgePlanet {
  constructor(age) {
    this.age = age;
    this.lifespan = 79;
  }

  // calculate age on each planet
  planetAge(planet) {
    const result = this.age / planet;
    const planetAge = result.toFixed(0);
    return planetAge;
  }
  // calculate remaining or exceeded lifespan on each planet
  lifeRemaining(planet) {
    let remaining = (this.lifespan - this.age);
    if ( remaining < 0 ) {
      const exceeded = Math.abs(remaining);
      const result = exceeded / planet;
      const planetLifeExceeded = result.toFixed(0);
      return planetLifeExceeded;
    } else {
      const result = remaining / planet;
      const planetLifeRemaining = result.toFixed(0);
      return planetLifeRemaining;
    }
  }
}

export class AgePerson {
  constructor(birthdate) {
    this.birthdate = birthdate;
    // determine age from birthdate
  }
  ageCalc() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const dob = new Date(this.birthdate);
    const birthYear = dob.getFullYear();
    const birthMonth = dob.getMonth();
    const birthDay = dob.getDay();
    const currentBirthday = new Date(currentYear, birthMonth, birthDay);
    const age = currentYear - birthYear;
    if (currentBirthday > today) {
      // have you had your birthday yet? no? then subtract a year
      return age - 1;
    } else {
      return age;
    }
  };
}
