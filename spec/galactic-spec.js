import { AgePlanet } from './../src/js/galactic.js';
import { AgePerson } from './../src/js/galactic.js';

// test for calculating persons age from birthdate
describe('AgePerson', function(){
  it('should return age in years from birthdate', function() {
    const ageYears = new AgePerson('June 13, 1982')
    expect (ageYears.ageCalc()).toEqual(36);
  });
});


// tests for calculating age on each planet
describe('AgePlanet', function() {
  it('should return age on Mercury', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.ageMercury()).toEqual('150');
  });
});

describe('AgePlanet', function() {
  it('should return age on Venus', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.ageVenus()).toEqual('58');
  });
});

describe('AgePlanet', function() {
  it('should return age on Mars', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.ageMars()).toEqual('19');
  });
});

describe('AgePlanet', function() {
  it('should return age on Jupiter', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.ageJupiter()).toEqual('3');
  });
});

// tests for calculating life remaining/exceeded on each planet

describe('AgePlanet', function() {
  it('should return life remaining on Mercury', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemainingMercury()).toEqual('179');
  });
});

describe('AgePlanet', function() {
  it('should return life remaining on Mercury', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemainingMercury()).toEqual('46');
  });
});

describe('AgePlanet', function() {
  it('should return life remaining on Venus', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemainingVenus()).toEqual('69');
  });
});

describe('AgePlanet', function() {
  it('should return life remaining on Venus', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemainingVenus()).toEqual('18');
  });
});

describe('AgePlanet', function() {
  it('should return life remaining on Mars', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemainingMars()).toEqual('23');
  });
});

describe('AgePlanet', function() {
  it('should return life remaining on Mars', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemainingMars()).toEqual('6');
  });
});

describe('AgePlanet', function() {
  it('should return life remaining on Jupiter', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemainingJupiter()).toEqual('4');
  });
});

describe('AgePlanet', function() {
  it('should return life remaining on Jupiter', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemainingJupiter()).toEqual('1');
  });
});
