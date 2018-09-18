const createAndAppend = require('../helpers/create_and_append.js');
const PubSub = require('../helpers/pub_sub.js');

const Vehicles = function (section) {
  this.section = section;
};

Vehicles.prototype.createVehicles = function () {
  PubSub.subscribe(`Ghibli:allvehicles`, (event) => {
        const allArray = event.detail;
        this.section.innerHTML = '';
        const showAll = allArray.forEach( (item) => {
          this.render();
        })
    });
};

Vehicles.prototype.render = function (element) {
  const selectDiv = createAndAppend('div', 'selectView', '', section);
  const name = createAndAppend('h2', 'vehiclename', element.name, selectDiv);
  const vehicle_class = createAndAppend('h3', 'vehicleclass', `Vehicle Class: ${element.age}`, selectDiv);
  const description = createAndAppend('h4', 'vehicledesc', `${element.description}`,selectDiv);
};
