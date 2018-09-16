const createAndAppend = require('../helpers/create_and_append.js');
const renderAll = require('../helpers/render.js');
const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Ghibli = function () {

};

Ghibli.prototype.bindEvents = function () {
  this.getData( 'https://ghibliapi.herokuapp.com/films', 'Ghibli:all_data');
};

Ghibli.prototype.getData = function ( url, channel) {
  const request = new Request(url)
request.get()
  .then((data) => {
    PubSub.publish(channel, data);
  })
  .catch((err) => {
   console.error(err);
 });
};

Ghibli.prototype.filterFilms = function (films, filterType, filterItem, section) {
    const filteredFilms = films.filter((film) => {
     return film[filterType] === filterItem
  });
  section.innerHTML = '';
  filteredFilms.forEach(item => renderAll('directorFilms', item, section))
};




// Ghibli.prototype.filterFilmsArray = function (firstArray, type, specified) {
//   console.log(specified);
//   const filteredFilms = firstArray.filter ((element) => {
//      return element[type].includes(specified)
//      console.log(filteredFilms);
//   });
//   PubSub.publish('Ghibli:filteredFilmsArray', filteredFilms);
// };

Ghibli.prototype.moreData = function (type) {
  this.getData(`https://ghibliapi.herokuapp.com/${type}`, `Ghibli:all${type}`);
};

Ghibli.prototype.displayNav = function () {
    let x = document.querySelector("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    };
};


module.exports = Ghibli;
