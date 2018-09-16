const Ghibli = require ('./models/ghibli');
const Films = require('./views/films.js');

document.addEventListener('DOMContentLoaded', () => {
  const ghibli = new Ghibli();
  ghibli.bindEvents();

  const films = new Films();
  films.bindEvents();
});
