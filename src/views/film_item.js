const createAndAppend = require('../helpers/create_and_append.js');

const FilmItem = function (section) {
  this.section = section
};

FilmItem.prototype.render = function (element)  {
  const div = createAndAppend('div', 'film-div', '', section);
  const title = createAndAppend('h2', 'filmtitle', element.title, div);
  title.id = element.id;
  const director = createAndAppend('h3', 'filmdirector', element.director, div);
  const year = createAndAppend('h4', 'filmyear',element.release_date, div);
};

FilmItem.prototype.renderMoreDetail = function (element) {
  const selectDiv = createAndAppend('div', 'selectView', '', this.section);
  const title = createAndAppend ('h2', 'filmtitle', element.title, selectDiv);
  const director = createAndAppend('h3', 'filmdirector', element.director, selectDiv);
  const year = createAndAppend('h4', 'filmyear', element.release_date, selectDiv);
  const description = createAndAppend('p', 'filmDescription', element.description, selectDiv);
};
