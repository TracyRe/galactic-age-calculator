import { AgePlanet } from './../src/js/galactic.js';
import { AgePerson } from './../src/js/galactic.js';

const merc = .24;
const venus = .62;
const mars = 1.88;
const jupiter= 11.86;

// test for calculating persons age from birthdate
describe('AgePerson', function(){
  it('should return age in years from birthdate', function() {
    const ageYears = new AgePerson('February 13, 1962')
    expect (ageYears.ageCalc()).toEqual(57);
  });
});


// tests for calculating age on each planet
describe('AgePlanet', function() {
  it('should return age on Mercury', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.planetAge(merc)).toEqual('150');
  });

  it('should return age on Venus', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.planetAge(venus)).toEqual('58');
  });

  it('should return age on Mars', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.planetAge(mars)).toEqual('19');
  });

  it('should return age on Jupiter', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.planetAge(jupiter)).toEqual('3');
  });

// tests for calculating life remaining/exceeded on each planet

  it('should return life remaining on Mercury', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemaining(merc)).toEqual('179');
  });

  it('should return life remaining on Mercury', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemaining(merc)).toEqual('46');
  });

  it('should return life remaining on Venus', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemaining(venus)).toEqual('69');
  });

  it('should return life remaining on Venus', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemaining(venus)).toEqual('18');
  });

  it('should return life remaining on Mars', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemaining(mars)).toEqual('23');
  });

  it('should return life remaining on Mars', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemaining(mars)).toEqual('6');
  });

  it('should return life remaining on Jupiter', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemaining(jupiter)).toEqual('4');
  });

  it('should return life remaining on Jupiter', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemaining(jupiter)).toEqual('1');
  });
});
