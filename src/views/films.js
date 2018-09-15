const PubSub = require('../helpers/pub_sub.js');
const create_and_append = require('../helpers/create_and_append.js');

const Films = function () {
  this.films = null;
};

Films.prototype.bindEvents = function () {
  PubSub.subscribe('Ghibli:all_data', (event) => {
    this.films = event.detail;
  });
};

Films.prototype.render = function () {

};

module.exports = Films;
