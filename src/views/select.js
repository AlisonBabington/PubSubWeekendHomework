const createAndAppend = require('../helpers/create_and_append.js');
const renderAll = require('../helpers/render.js')
const PubSub = require('../helpers/pub_sub.js');
const Ghibli = require('../models/ghibli.js');
const Chart = require('./chart.js')

const Select = function (section) {
  this.section = section;
  this.films = null;
  this.ghibli = new Ghibli();
};

Select.prototype.getInfo = function () {
  this.ghibli.getData('https://ghibliapi.herokuapp.com/films', 'Ghibli:all_data-select')
  PubSub.subscribe('Ghibli:all_data-select', (event) => {
    this.films = event.detail;
  })
};

Select.prototype.bindEvents = function () {
  this.getInfo();
  this.section.removeEventListener('click', (event) => {
    this.handleAddClick(event);
  })
  this.section.addEventListener('click', (event) => {
     this.handleAddClick(event);

  });
}

Select.prototype.getOneInfo = function (film) {
  this.ghibli.getData(`https://ghibliapi.herokuapp.com/films/${film.id}`, 'Ghibli:oneFilmdata');
  PubSub.subscribe( 'Ghibli:oneFilmdata', (event) => {
    const thisFilm = event.detail;
    this.section.innerHTML = '';
    const render = renderAll('FilmItem', thisFilm, this.section)
    // ghibli.makeRatingChart(thisFilm.rt_score);
  });
};

Select.prototype.handleAddClick = function (event) {
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

  Select.prototype.handleNavClick = function (event, films) {
    if (event.target.innerHTML === 'Home') {
      this.section.innerHTML = "";
      const chart = new Chart (this.section);
      chart.render(films)
      films.forEach( film => renderAll('allFilms', film, this.section))
    }
    else if (event.target.id === "people") {
      this.ghibli.moreData("people")
      this.rendersOtherData(this.section, 'people');
    }
    else if (event.target.id === "vehicles") {
      this.ghibli.moreData("vehicles")
      this.rendersOtherData(this.section, 'vehicles');
    }
  };

  Select.prototype.displayCharacterFilms = function () {
    PubSub.subscribe('Ghibli:foundFilms', (event) => {
      this.section.innerHTML = "";
      renderAll("FilmItem", event.detail, this.section )
    })
  };

Select.prototype.rendersOtherData = function (section, type) {
  PubSub.subscribe(`Ghibli:all${type}`, (event) => {
      const allArray = event.detail;
      section.innerHTML = '';
      const showAll = allArray.forEach( (item) => {
      return renderAll(`all${type}`, item, section)
      })
  });
};


module.exports = Select;
