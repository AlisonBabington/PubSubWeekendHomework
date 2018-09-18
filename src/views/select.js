const createAndAppend = require('../helpers/create_and_append.js');
const PubSub = require('../helpers/pub_sub.js');
const Ghibli = require('../models/ghibli.js');
const Chart = require('./chart.js')

const Select = function (section) {
  this.section = section;
  this.films = null;
  this.ghibli = new Ghibli();
};

Select.prototype.bindEvents = function () {
  this.getInfo();
  this.section.removeEventListener('click', (event) => {
    this.handleClick(event);
  });
  this.section.addEventListener('click', (event) => {
     this.handleClick(event);
  });
}

Select.prototype.getInfo = function () {
  this.ghibli.getData('https://ghibliapi.herokuapp.com/films', 'Ghibli:all_data-select')
  PubSub.subscribe('Ghibli:all_data-select', (event) => {
    this.films = event.detail;
  })
};

Select.prototype.getOneInfo = function (film) {
  this.ghibli.getData(`https://ghibliapi.herokuapp.com/films/${film.id}`, 'Ghibli:oneFilmdata');
  PubSub.subscribe( 'Ghibli:oneFilmdata', (event) => {
    const thisFilm = event.detail;
    this.section.innerHTML = '';
    const filmItem = new FilmItem(this.section);
    filmitem.renderMoreDetail(thisFilm)
  });
};

Select.prototype.handleClick = function (event) {
  if (event.target.matches('.filmtitle')) {
    const selectedFilm = event.target;
    this.getOneInfo(selectedFilm)
  }
  else if (event.target.matches('.filmdirector')) {
    const selectedDirector = event.target.innerHTML;
    this.ghibli.filterFilms(this.films, 'director', selectedDirector, this.section);
    }
    else if (event.target.matches('.cFilms')) {
      const filmsUrl = event.target.id;
      this.ghibli.findFilms(filmsUrl);
      this.displayCharacterFilms();
    }
  };

  Select.prototype.displayCharacterFilms = function () {
    PubSub.subscribe('Ghibli:foundFilms', (event) => {
      this.section.innerHTML = "";
      const filmItem = new FilmItem(this.section);
      filmitem.renderMoreDetail(thisFilm)
    })
  };

module.exports = Select;
