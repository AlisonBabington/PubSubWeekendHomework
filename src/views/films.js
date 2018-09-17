const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_and_append.js');
const renderAll = require('../helpers/render.js');

const Chart = require('./chart.js');
const Select = require('./select.js');
const Ghibli = require('../models/ghibli.js');
const NavBar = require('./nav_bar.js');

const Films = function () {
  this.films = null;
  this.section = null;
};

Films.prototype.bindEvents = function () {
  PubSub.subscribe('Ghibli:all_data', (event) => {
    this.render(event.detail);
  });
};

Films.prototype.render = function (films) {
  this.films = films;
  this.section = document.querySelector('section#films-container')
  const div = createAndAppend('div', null, '', this.section)
  const chart = new Chart (div);
  chart.render(this.films)
  this.films.forEach( (film) => {
    const render = renderAll('allFilms', film, this.section,)
  })
  const select = new Select(this.section);
  select.bindEvents();
  const navBar = new NavBar(this.films, this.section);
  navBar.navbarlinks();
};

Films.prototype.navbarlinks = function () {
  const nav = document.querySelector('div#myTopnav')
  nav.addEventListener('click', (event) => {
    this.handleNavClick(event, this.section)
  })
  const dropdown = document.querySelector('div.dropdown-content')
  dropdown.addEventListener('click', (event) => {
    this.handleNavClick(event, this.section)
  })
};


module.exports = Films;
