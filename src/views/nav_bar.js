const Select = require('./select.js');

const NavBar = function (films, section) {
  this.films = films;
  this.section = section;
};

NavBar.prototype.navbarlinks = function () {
  const nav = document.querySelector('div#myTopnav')
  nav.addEventListener('click', (event) => {
    const select = new Select(this.section)
    select.handleNavClick(event, this.films);
  })

};

module.exports = NavBar;
