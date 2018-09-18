const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_and_append.js');
const FilmItem = require('./film_item.js');
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
  this.section = document.querySelector('section#films-container');
  const div = createAndAppend('div', null, '', this.section);
  const chart = new Chart (div);
  chart.render(this.films);
  this.films.forEach( (film) => {
    const filmItem = new FilmItem(this.section);
    filmItem.render(film);
  })
  const select = new Select(this.section);
  select.bindEvents();
  const navBar = new NavBar(this.films, this.section);
  navBar.navbarlinks();
};


module.exports = Films;
