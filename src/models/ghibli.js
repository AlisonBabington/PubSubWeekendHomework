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
    this.data = data;
    PubSub.publish(channel, this.data);
  })
  .catch((err) => {
   console.error(err);
 });
};

module.exports = Ghibli;
