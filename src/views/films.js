const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_and_append.js');
const FilmItem = require('./film_item.js');
const Select = require('./select.js');

const Films = function () {
};

Films.prototype.bindEvents = function () {
  PubSub.subscribe('Ghibli:all_data', (event) => {
    this.render(event.detail);
  });

};

Films.prototype.render = function (films) {
  const section = document.querySelector('section#films-container')
  const div = createAndAppend('div', null, '', section)
  films.forEach( (film) => {
    const filmItem = new FilmItem(section);
    filmItem.render(film);
  })
  const select = new Select(section);
  select.bindEvents();
};

module.exports = Films;
