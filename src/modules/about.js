import mapImage from '../assets/imgs/map.png';

function createAbout() {
  const section = document.createElement('section');
  section.classList.add('about');

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');

  const title = document.createElement('h1');
  title.textContent = 'Passion';
  const phone = document.createElement('p');
  phone.textContent = '+1 213-000-9876';
  const address = document.createElement('p');
  address.textContent = 'Hollywood Boulevard 42, Los Angeles, USA';
  contactInfo.append(title, phone, address);

  const map = document.createElement('div');
  map.classList.add('map');
  const mapImg = document.createElement('img');
  mapImg.src = mapImage;
  map.appendChild(mapImg);

  section.append(contactInfo, map);

  return section;
}

function loadAbout() {
  const main = document.querySelector('main');
  const about = createAbout();

  main.innerHTML = '';
  main.appendChild(about);
}

export default loadAbout;
