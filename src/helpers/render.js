const createAndAppend = require('./create_and_append.js');

const renderAll = function (type, element, section) {
if (type === "allFilms" || "directorFilms") {
  const div = createAndAppend('div', 'film-div', '', section);
  const title = createAndAppend('h2', 'filmtitle', element.title, div);
  title.id = element.id;
  const director = createAndAppend('h3', 'filmdirector', element.director, div);
  const year = createAndAppend('h4', 'filmyear',element.release_date,div);
}
else if (type === "FilmItem") {
  const selectDiv = createAndAppend('div', 'selectView', '', section);
  const title = createAndAppend ('h2', 'filmtitle', element.title, selectDiv);
  const director = createAndAppend('h3', 'filmdirector', element.director, selectDiv);
  const year = createAndAppend('h4', 'filmyear', element.release_date, selectDiv);
  const description = createAndAppend('p', 'filmDescription', element.description, selectDiv);
}
else if (type === "allPeople") {
  const selectDiv = createAndAppend('div', 'selectView', '', section);
  const name = createAndAppend('h2', 'personname', person.name, selectDiv)
}
};

module.exports = renderAll;
