const createAndAppend = require('../helpers/create_and_append.js');
const PubSub = require('../helpers/pub_sub.js');

const People = function (section) {
  this.section = section;
};

People.prototype.createPeople = function () {
  PubSub.subscribe(`Ghibli:allpeople`, (event) => {
        const allArray = event.detail;
        this.section.innerHTML = '';
        const showAll = allArray.forEach( (item) => {
          this.render();
        })
    });
  };

People.prototype.render = function (element) {
  const selectDiv = createAndAppend('div', 'selectView', '', this.section);
  const name = createAndAppend('h2', 'charactername', element.name, selectDiv);
  const age = createAndAppend('h3', 'characterage', `Age: ${element.age}`, selectDiv);
  const gender = createAndAppend('h3', 'cGender', `Gender: ${element.gender}`,selectDiv);
  const eyeColor = createAndAppend('h3', 'cEyeColor', `Eye Colour: ${element.eye_color}`, selectDiv);
  const hairColor = createAndAppend('h3', 'cHairColor', `Hair Colour: ${element.hair_color}`, selectDiv);
  const films = createAndAppend('h3', 'cFilms', `Films`, selectDiv);
  films.id = element.films;
};
