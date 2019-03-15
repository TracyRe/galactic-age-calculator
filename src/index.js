import $ from 'jquery';
import './scss/styles.scss';
import { AgePlanet } from './js/galactic.js';
import { AgePerson } from './js/galactic.js';

$(document).ready(function(){
  $("#galactic-age").submit(function(event) {
    event.preventDefault();
    const birthdate = ($("#birthdate").val());
    let age = AgePerson(birthdate);
    let output = AgePlanet(age);
    $(".result").html(`<p>${}</p>`);
  });
});
