
const NavBar = function (films, section) {
  this.films = films;
  this.section = section;
};

NavBar.prototype.navbarlinks = function () {
  const nav = document.querySelector('div#myTopnav')
  nav.addEventListener('click', (event) => {
    this.handleNavClick(event, this.films);
  })
};

NavBar.prototype.handleNavClick = function (event, films) {
  if (event.target.innerHTML === 'Home') {
    this.section.innerHTML = "";
    const chart = new Chart (this.section);
    chart.render(films)
    films.forEach( film => renderAll('allFilms', film, this.section))
  }
  else if (event.target.id === "people") {
    this.ghibli.moreData("people")
    this.rendersOtherData(this.section, 'people');
  }
  else if (event.target.id === "vehicles") {
    this.ghibli.moreData("vehicles")
    this.rendersOtherData(this.section, 'vehicles');
  }
};

module.exports = NavBar;
