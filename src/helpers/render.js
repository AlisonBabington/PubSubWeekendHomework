const createAndAppend = require('./create_and_append.js');

const renderAll = function (type, element, section) {
  if (type === "FilmItem") {
    const selectDiv = createAndAppend('div', 'selectView', '', section);
    const title = createAndAppend ('h2', 'filmtitle', element.title, selectDiv);
    const director = createAndAppend('h3', 'filmdirector', element.director, selectDiv);
    const year = createAndAppend('h4', 'filmyear', element.release_date, selectDiv);
    const description = createAndAppend('p', 'filmDescription', element.description, selectDiv);
  }
  else if (type === "allpeople") {
    const selectDiv = createAndAppend('div', 'selectView', '', section);
    const name = createAndAppend('h2', 'charactername', element.name, selectDiv);
    const age = createAndAppend('h3', 'characterage', `Age: ${element.age}`, selectDiv);
    const gender = createAndAppend('h3', 'cGender', `Gender: ${element.gender}`,selectDiv);
    const eyeColor = createAndAppend('h3', 'cEyeColor', `Eye Colour: ${element.eye_color}`, selectDiv);
    const hairColor = createAndAppend('h3', 'cHairColor', `Hair Colour: ${element.hair_color}`, selectDiv);

  }
else if (type === "allFilms" || "directorFilms") {
  const div = createAndAppend('div', 'film-div', '', section);
  const title = createAndAppend('h2', 'filmtitle', element.title, div);
  title.id = element.id;
  const director = createAndAppend('h3', 'filmdirector', element.director, div);
  const year = createAndAppend('h4', 'filmyear',element.release_date, div);
}
};

module.exports = renderAll;
