const Ghibli = require ('./models/ghibli');
const Films = require('./views/films.js');

document.addEventListener('DOMContentLoaded', () => {
  const ghibli = new Ghibli();
  ghibli.getData('https://ghibliapi.herokuapp.com/films', 'Ghibli:all_data')

  const films = new Films();
  films.bindEvents();
});
