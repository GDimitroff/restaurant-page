import './main.css';
import createHeader from './components/header';
import createNavbar from './components/navbar';
import createFooter from './components/footer';
import loadHome from './modules/home';

function init() {
  const body = document.querySelector('body');
  const header = createHeader();
  const navbar = createNavbar();
  const footer = createFooter();

  header.appendChild(navbar);

  const main = document.createElement('main');

  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);

  loadHome();
}

init();
