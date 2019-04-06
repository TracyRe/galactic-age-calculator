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

    const merc = .24;
    const venus = .62;
    const mars = 1.88;
    const jupiter= 11.86;


    const ageOutput = new AgePlanet(age);
    const outputAgeMercury = ageOutput.planetAge(merc);
    const outputAgeVenus = ageOutput.planetAge(venus);
    const outputAgeMars = ageOutput.planetAge(mars);
    const outputAgeJupiter = ageOutput.planetAge(jupiter);
    const outputLifeRemainingMercury = ageOutput.lifeRemaining(merc);
    const outputLifeRemainingVenus = ageOutput.lifeRemaining(venus);
    const outputLifeRemainingMars = ageOutput.lifeRemaining(mars);
    const outputLifeRemainingJupiter = ageOutput.lifeRemaining(jupiter);

    $(".result").show();
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
        $(".result").hide();
      });
    });
