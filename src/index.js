import './main.css';
import createHeader from './components/header';
import createHome from './modules/home';

function init() {
  const body = document.querySelector('body');
  const header = createHeader();
  
  const main = document.createElement('main');
  main.classList.add('content');
  const homePage = createHome();
  main.appendChild(homePage);
  
  body.appendChild(header);
  body.appendChild(main);
}

init();
