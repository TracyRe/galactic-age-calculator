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
Take a person's age on Earth and return corresponding age for Mercury | 36 | 150
Take a person's age on Earth and return corresponding age for Venus | 36 | 58.06
Take a person's age on Earth and return corresponding age for Mars | 36 | 19.15
Take a person's age on Earth and return corresponding age for Jupiter | 36 | 3.04
Take a person's age on Earth and return remaining lifespan in years on Mercury | 36 | 179.17
Take a person's age on Earth and return remaining lifespan in years on Venus | 36 | 69.35
Take a person's age on Earth and return remaining lifespan in years on Mars | 36 | 22.87
Take a person's age on Earth and return remaining lifespan in years on Jupiter | 36 | 3.63
If person has exceeded life expectancy, return number of years by which they have surpassed it, on Mercury | 90 | 45.83
If person has exceeded life expectancy, return number of years by which they have surpassed it, on Venus | 90 | 17.74
If person has exceeded life expectancy, return number of years by which they have surpassed it, on Mars | 90 | 5.85
If person has exceeded life expectancy, return number of years by which they have surpassed it, on Jupiter | 90 | 0.93

#### Assumptions
* Average lifespan: 79 years

### Stretch Goals
* Create a UI
* Calculate Keith Richards' age in dog years on Jupiter in 2073

### Development Plan
1. Configure environment with Karma & asmine _DONE_
1. Draft README _DONE_
1. Write specs _DONE_
1. Write first test to fulfill first spec
1. Write code for first test
1. Falsify first test to avoid false positive
1. Confirm first test passes
1. Repeat from 4 for each spec
1. If time, create UI

### Installation
* Clone from https://github.com/TracyRe/galactic-age-calculator.git
* Run `$ npm install`


### Known Bugs
* None identified

### Technologies Used
* Javascript
* Tested with Karma and Jasmine

### License
_license_

Copyright (c) 2019 Tracy Reith
