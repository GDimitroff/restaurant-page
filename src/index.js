import './main.css';
import createHeader from './components/header';
import createFooter from './components/footer';
import createHome from './modules/home';

function init() {
  const body = document.querySelector('body');
  const header = createHeader();
  const footer = createFooter();

  const main = document.createElement('main');
  main.classList.add('main');
  const homePage = createHome();
  main.appendChild(homePage);

  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
}

init();
