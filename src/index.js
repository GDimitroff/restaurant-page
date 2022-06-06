import { print } from './print';
import './main.css';

function component() {
  print();

  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = "It's working!";

  div.appendChild(p);
  div.classList.add('red');

  return div;
}

document.body.appendChild(component());
