const createAndAppend = require('../helpers/create_and_append.js');
const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Ghibli = function () {
  this.data = null;
};

Ghibli.prototype.getData = function (url, channel) {
  const request = new Request(url)
request.get()
  .then((data) => {
    console.log(data);
    this.data = data;
    PubSub.publish(channel, this.data);
  })
  .catch((err) => {
   console.error(err);
 });
};

Ghibli.prototype.filterFilms = function (films, filterType, filterItem) {
  return films.filter((film) => {
     return film[filterType] === filterItem
  })
  console.log(films);
};

module.exports = Ghibli;
