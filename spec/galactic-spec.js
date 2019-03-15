import { AgePlanet } from './../src/js/galactic.js';

describe('AgePlanet', function() {
  it('should return age on Mercury', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.ageMercury()).toEqual('150.00');
  });
});

describe('AgePlanet', function() {
  it('should return age on Venus', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.ageVenus()).toEqual('58.06');
  });
});

describe('AgePlanet', function() {
  it('should return age on Mars', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.ageMars()).toEqual('19.15');
  });
});


describe('AgePlanet', function() {
  it('should return age on Jupiter', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.ageJupiter()).toEqual('3.04');
  });
});
