export class AgePlanet {
  constructor(age) {
    this.age = age;
    this.factorMerc = .24;
    this.factorVenus = .62;
    this.factorMars = 1.88;
    this.factorJupiter = 11.86;
    this.lifespan = 79;
  }

  // calculate age on each planet
  ageMercury() {
    const result = this.age / this.factorMerc;
    const planetAge = result.toFixed(0);
    return planetAge;
  }
  ageVenus() {
    const result = this.age / this.factorVenus;
    const planetAge = result.toFixed(0);
    return planetAge;
  }

  ageMars() {
    const result = this.age / this.factorMars;
    const planetAge = result.toFixed(0);
    return planetAge;
  }

  ageJupiter() {
    const result = this.age / this.factorJupiter;
    const planetAge = result.toFixed(0);
    return planetAge;
  }

  // calculate remaining or exceeded lifespan on each planet
  lifeRemainingMercury() {
    let remaining = (this.lifespan - this.age);
    if ( remaining < 0 ) {
      const exceeded = Math.abs(remaining);
      const result = exceeded / this.factorMerc;
      const planetLifeExceeded = result.toFixed(0);
      return planetLifeExceeded;
    } else {
      const result = remaining / this.factorMerc;
      const planetLifeRemaining = result.toFixed(0);
      return planetLifeRemaining;
    }
  }

  lifeRemainingVenus() {
    let remaining = (this.lifespan - this.age);
    if ( remaining < 0 ) {
      const exceeded = Math.abs(remaining);
      const result = exceeded / this.factorVenus;
      const planetLifeExceeded = result.toFixed(0);
      return planetLifeExceeded;
    } else {
      const result = remaining / this.factorVenus;
      const planetLifeRemaining = result.toFixed(0);
      return planetLifeRemaining;
    }
  }

  lifeRemainingMars() {
    let remaining = (this.lifespan - this.age);
    if ( remaining < 0 ) {
      const exceeded = Math.abs(remaining);
      const result = exceeded / this.factorMars;
      let planetLifeExceeded = result.toFixed(0);
      return planetLifeExceeded;
    } else {
      const result = remaining / this.factorMars;
      let planetLifeRemaining = result.toFixed(0);
      return planetLifeRemaining;
    }
  }

  lifeRemainingJupiter() {
    let remaining = (this.lifespan - this.age);
    if ( remaining < 0 ) {
      const exceeded = Math.abs(remaining);
      const result = exceeded / this.factorJupiter;
      const planetLifeExceeded = result.toFixed(0);
      return planetLifeExceeded;
    } else {
      const result = remaining / this.factorJupiter;
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
