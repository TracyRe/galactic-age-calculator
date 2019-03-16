import $ from 'jquery';
import './scss/styles.scss';
import { AgePlanet } from './js/galactic.js';
import { AgePerson } from './js/galactic.js';

$(document).ready(function(){
  $("#galactic-age").submit(function(event) {
    event.preventDefault();
    const birthdate = ($("#birthdate").val());
    let age = AgePerson(birthdate); // I don't think this is right, it's just a placeholder
    let output = AgePlanet(age);// I don't think this is right, it's just a placeholder
    // $(".result").html(`<p>On <em>Mercury</em>, you are <strong>${ageMercury}.</strong></p>
    // <p>On <em>Venus</em>, you are <strong>${ageVenus}.</strong></p>
    // <p>On <em>Mars</em>, you are <strong>${ageMars}.</strong></p>
    // <p>On <em>Jupiter</em>, you are <strong>${ageJupiter}.</strong></p>
    // <h3>How long do you have to live on each planet?</h3>
    // <p>On <em>Mercury</em>, you have <strong>${lifeRemainingMercury}</strong> years left.</p>
    // <p>On <em>Venus</em>, you have <strong>${lifeRemainingVenus}</strong> years left.</p>
    // <p>On <em>Mars</em>, you have <strong>${lifeRemainingMars}</strong> years left.</p>
    // <p>On <em>Jupiter</em>, you have <strong>${lifeRemainingJupiter}</strong> years left.</p>`); // placeholder
  });
});
