const createAndAppend = require('../helpers/create_and_append.js');
const renderAll = require('../helpers/render.js')
const PubSub = require('../helpers/pub_sub.js');
const Ghibli = require('../models/ghibli.js');

const Select = function (section) {
  this.section = section;
  this.films = null;
};

Select.prototype.getInfo = function () {
  const ghibli = new Ghibli()
  ghibli.getData('https://ghibliapi.herokuapp.com/films', 'Ghibli:all_data-select')
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
  const ghibli = new Ghibli();
  ghibli.getData(`https://ghibliapi.herokuapp.com/films/${film.id}`, 'Ghibli:oneFilmdata');
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
    const ghibli = new Ghibli();
    ghibli.filterFilms(this.films, 'director', selectedDirector, this.section);

    };
  };

  Select.prototype.getFiltered = function () {
    PubSub.subscribe('Ghibli:filteredFilms', (event) => {
      console.log(event);
      const filteredinfo = event.detail;
      filteredinfo.forEach( item => console.log(item) );
  });
  // renderAll('directorFilms', item, this.section)
};

Select.prototype.renderPeople = function (section) {
  PubSub.subscribe('Ghibli:allPeople', (event) => {
      console.log(event);
  })
};


module.exports = Select;
