const renderAll = require('../helpers/render.js');
const Select = require('./select.js');
const Ghibli = require('../models/ghibli.js');
const PubSub = require('../helpers/pub_sub.js');

const NavBar = function (films, section) {
  this.films = films;
  this.section = section;
};

NavBar.prototype.navbarlinks = function () {
  const nav = document.querySelector('div#myTopnav')
  nav.addEventListener('click', (event) => {
    this.handleNavClick(event, this.section)
  })

};

NavBar.prototype.handleNavClick = function (event) {
  if (event.target.innerHTML === 'Home') {
    this.section.innerHTML = "";
    this.films.forEach( film => renderAll('allFilms', film, this.section))
  }
  else if (event.target.id === "people") {
    const select = new Select(this.section)
    const ghibli = new Ghibli();
    ghibli.moreData("people")
    select.rendersOtherData(this.section, 'people');
  }
  else if (event.target.id === "vehicles") {
    const select = new Select(this.section)
    const ghibli = new Ghibli();
    ghibli.moreData("vehicles")
    select.rendersOtherData(this.section, 'vehicles');
  }
};

module.exports = NavBar;
