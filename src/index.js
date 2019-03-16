import $ from 'jquery';
import './scss/styles.scss';
import { AgePlanet } from './js/galactic.js';
import { AgePerson } from './js/galactic.js';

$(document).ready(function(){
  $("#galactic-age").submit(function(event) {
    event.preventDefault();
    const birthdate = ($("#birthdate").val());
    const ageInput = new AgePerson(birthdate);
    const age = ageInput.ageCalc();

    const ageOutput = new AgePlanet(age);
    const outputAgeMercury = ageOutput.ageMercury();
    const outputAgeVenus = ageOutput.ageVenus();
    const outputAgeMars = ageOutput.ageMars();
    const outputAgeJupiter = ageOutput.ageJupiter();
    const outputLifeRemainingMercury = ageOutput.lifeRemainingMercury();
    const outputLifeRemainingVenus = ageOutput.lifeRemainingVenus();
    const outputLifeRemainingMars = ageOutput.lifeRemainingMars();
    const outputLifeRemainingJupiter = ageOutput.lifeRemainingJupiter();

    if (age >= 79) {
      $(".result").html(`<p>On <em>Mercury</em>, you are <strong>${outputAgeMercury}.</strong> Congratulations on living there <strong>${outputLifeRemainingMercury}</strong> years longer than most.</p>
      <p>On <em>Venus</em>, you are <strong>${outputAgeVenus}.</strong> You have lived <strong>${outputLifeRemainingVenus}</strong> more years than the average Venuvian transplant.</p>
      <p>There is <em>Life on Mars</em> and you are <strong>${outputAgeMars}</strong> years old there. You have outlasted most by <strong>${outputLifeRemainingMars}</strong> years.</p>
      <p>On <em>Jupiter</em>, you are <strong>${outputAgeJupiter} years old.</strong> You have lived <strong>${outputLifeRemainingJupiter}</strong> years longer than average.</p>`);
    } else {
      $(".result").html(`<p>On <em>Mercury</em>, you are <strong>${outputAgeMercury}.</strong> You will probably live another <strong>${outputLifeRemainingMercury}</strong> years.</p>
      <p>On <em>Venus</em>, you are <strong>${outputAgeVenus}.</strong> Enjoy your remaining <strong>${outputLifeRemainingVenus}</strong> years.</p>
      <p>There is <em>Life on Mars</em> and you are <strong>${outputAgeMars}</strong> years old there. Maybe you'll run into Matt Damon in the next <strong>${outputLifeRemainingMars}</strong> years.</p>
      <p>On <em>Jupiter</em>, you are <strong>${outputAgeJupiter} years old.</strong> Only <strong>${outputLifeRemainingJupiter}</strong> more to go.</p>`);
    }

  });

  $("#reset").click(function(event) {
    event.preventDefault();
    const birthdate = ($("#birthdate").val(""));
    $(".result").html("");
  });
});
