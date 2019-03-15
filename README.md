# Galactic Age Calculator

#### Test Driven Development project for Epicodus

_Published_ **Mar 15 2019**<br>
_Author_ **Tracy Reith**

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Development Specs](#development-specs)
1. [Stretch Goals](#stretch-goals)
1. [Development Plan](#development-plan)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
A calculator that will
* take a person's age on Earth and calculate their relative age on Mercury, Venus, Mars, and Jupiter
* determine a person's remaining life expectancy for each planet; if the person has exceeded life expectancy, by how many years they have surpassed it

### Learning Objectives
* Apply test driven development best practices
* Setup and use a development environment with webpack
* Write and use tests with Karma and Jasmine
* Create and use Javascript classes

### Development Specs

Specification | Input | Output
------------- | ----- | ------
Get person's age from birthdate | June 13 1982 | 36
Take a person's age on Earth and return _corresponding age_ for **Mercury** | 36 | 150
Take a person's age on Earth and return _corresponding age_ for **Venus** | 36 | 58
Take a person's age on Earth and return _corresponding age_ for **Mars** | 36 | 19
Take a person's age on Earth and return _corresponding age_ for **Jupiter** | 36 | 3
Take a person's age on Earth and return _remaining lifespan_ in years on **Mercury** | 36 | 179
Take a person's age on Earth and return _remaining lifespan_ in years on **Venus** | 36 | 69
Take a person's age on Earth and return _remaining lifespan_ in years on **Mars** | 36 | 23
Take a person's age on Earth and return _remaining lifespan_ in years on **Jupiter** | 36 | 4
If person has exceeded life expectancy, return number of years by which they have _surpassed it,_ on **Mercury** | 90 | 46
If person has exceeded life expectancy, return number of years by which they have _surpassed it,_ on **Venus** | 90 | 18
If person has exceeded life expectancy, return number of years by which they have _surpassed it,_ on **Mars** | 90 | 6
If person has exceeded life expectancy, return number of years by which they have _surpassed it,_ on **Jupiter** | 90 | 1

#### Assumptions
* Average lifespan: 79 years

### Stretch Goals
* Create a UI
* Calculate Keith Richards' age in dog years on Jupiter in 2073

### Development Plan
1. ~~Configure environment with Karma & Jasmine~~ _DONE_
1. ~~Draft README~~ _DONE_
1. ~~Write specs~~ _DONE_
1. ~~Write first test to fulfill first spec~~ _DONE_
1. ~~Write code for first test~~ _DONE_
1. ~~Falsify first test to avoid false positive~~ _D0NE_
1. ~~Confirm first test passes~~ _DONE_
1. Repeat from 4 for each spec
1. If time, create UI
1. Create front end code to display results of back end code

### Installation
* Clone from https://github.com/TracyRe/galactic-age-calculator.git
* Run `$ npm install`


### Known Bugs
* Cannot get month, date, or year from birthdate - error is "getFullYear"/"getMonth"/"getDate" is not a function

### Technologies Used
* Javascript
* Tested with Karma and Jasmine

### License
_license_

Copyright (c) 2019 Tracy Reith
