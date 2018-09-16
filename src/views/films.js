const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_and_append.js');
const renderAll = require('../helpers/render.js');
const FilmItem = require('./film_item.js');
const Select = require('./select.js');
const Ghibli = require('../models/ghibli.js')

const Films = function () {
  this.section = null;
};

Films.prototype.bindEvents = function () {
  this.navbarlinks();
  PubSub.subscribe('Ghibli:all_data', (event) => {
    this.render(event.detail);
  });
};

Films.prototype.render = function (films) {
  this.section = document.querySelector('section#films-container')
  const div = createAndAppend('div', null, '', this.section)
  films.forEach( (film) => {
    const render = renderAll('allFilms', film, this.section,)
  })
  const select = new Select(this.section);
  select.bindEvents();
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

Films.prototype.handleNavClick = function (event, section) {
  if (event.target.innerHTML === 'Home') {
    this.bindEvents();
  }
  else if (event.target.id === "people") {
    const select = new Select(section)
    const ghibli = new Ghibli();
    ghibli.moreData("people")
    select.renderPeople();
  }
};


module.exports = Films;
