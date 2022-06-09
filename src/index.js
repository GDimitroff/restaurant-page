import './main.css';
import createHeader from './components/header';
import createNavbar from './components/navbar';
import createFooter from './components/footer';
import createHome from './modules/home';

function init() {
  const body = document.querySelector('body');
  const header = createHeader();
  const navbar = createNavbar();
  const footer = createFooter();

  header.appendChild(navbar);

  const main = document.createElement('main');
  const homePage = createHome();
  main.appendChild(homePage);

  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
}

init();
