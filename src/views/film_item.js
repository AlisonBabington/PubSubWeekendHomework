const createAndAppend = require('../helpers/create_and_append.js');

const FilmItem = function (section) {
  this.section = section;
};

FilmItem.prototype.render = function (film) {
  const div = createAndAppend('div', 'film-div', '', this.section);
  const title = createAndAppend('h2', 'filmtitle', film.title, div);
  const director = createAndAppend('h3', 'filmdirector', film.director, div);
  const year = createAndAppend('h4', 'filmyear',film.release_date,div);
};

module.exports = FilmItem;
