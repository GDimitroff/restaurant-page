import './main.css';
import createHeader from './components/header';
import createFooter from './components/footer';
import setActiveButton from './helpers/setActiveButton';
import loadHome from './modules/home';

function init() {
  const body = document.querySelector('body');
  const header = createHeader();
  const footer = createFooter();

  const main = document.createElement('main');

  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);

  setActiveButton(document.querySelector('nav a'));
  loadHome();
}

init();
