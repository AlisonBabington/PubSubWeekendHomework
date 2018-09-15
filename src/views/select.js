// const createAndAppend = require('../helpers/create_and_append.js');
// const PubSub = require('../helpers/pub_sub.js');
// const Ghibli = require('../models/ghibli.js');
//
// const Select = function (section) {
//   this.section = section;
//   this.films = null;
// };
//
// Select.prototype.getInfo = function () {
//   PubSub.subscribe('Ghibli:alldata-select', (event) => {
//     console.log(event);
//     this.films = event.detail;
//   })
// };
// 
// Select.prototype.bindEvents = function () {
//   this.section.removeEventListener('click', (event) => {
//     this.handleAddClick(event);
//   })
//   this.section.addEventListener('click', (event) => {
//      this.handleAddClick(event);
//   });
// }
//
//
// Select.prototype.getOneInfo = function (film) {
//   const ghibli = new Ghibli();
//   ghibli.getFilmInfo(film);
//   PubSub.subscribe( 'Ghibli:oneFilmdata', (event) => {
//     const thisFilm = event.detail;
//     this.section.innerHTML = '';
//     this.render(thisFilm);
//     ghibli.makeRatingChart(thisFilm.rt_score);
//   });
// };
//
// Select.prototype.render = function (thisFilm) {
//   const selectDiv = createAndAppend('div', 'selectView', '', this.section);
//   const title = createAndAppend ('h2', 'filmtitle', thisFilm.title, selectDiv);
//   const director = createAndAppend('h3', 'filmdirector', thisFilm.director, selectDiv);
//   const year = createAndAppend('h4', 'filmyear', thisFilm.release_date, selectDiv);
//   const description = createAndAppend('p', 'filmDescription', thisFilm.description, selectDiv);
// };
//
// Select.prototype.handleAddClick = function (event) {
//   if (event.target.matches('.filmtitle')) {
//     const selectedFilm = event.target;
//     this.getOneInfo(selectedFilm)
//   }
//   else if (event.target.matches('.filmdirector')) {
//     const selectedDirector = event.target.innerHTML;
//     const ghibli = new Ghibli();
//     ghibli.filterFilms(this.films, 'director', selectedDirector);
//     this.getFiltered();
//     };
//   };
//
//   Select.prototype.getFiltered = function () {
//     PubSub.subscribe('Ghibli:filteredFilms', (event) => {
//       const filteredFilms = event.detail;
//       this.section.innerHTML = '';
//       filteredFilms.forEach( film => this.render(film) );
//   });
// };
//
// // const film = document.querySelectorAll('h2.filmtitle');
// // const director = document.querySelectorAll('h3.filmdirector');
// //
// // film.forEach( (filmtitle) => {
// //   filmtitle.addEventListener('click', (event) => {
// //     const selectedFilm = event.target;
// //     console.log(event.target);
// //     this.getOneInfo(selectedFilm)
// //   });
// // });
// //
// // director.forEach( (director) => {
// //   director.addEventListener('click', (event) => {
// //     const selectedDirector = event.target.innerHTML;
// //     const ghibli = new Ghibli();
// //     ghibli.filterFilms(this.films, 'director', selectedDirector);
// //     PubSub.subscribe('Ghibli:filteredFilms', (event) => {
// //       const filteredFilms = event.detail;
// //       this.section.innerHTML = '';
// //       filteredFilms.forEach( film => this.render(film) );
// //     })
// //   });
// // });
// module.exports = Select;
