function createAbout() {
  const section = document.createElement('section');
  section.classList.add('about');

  const credits = document.createElement('h1');
  credits.textContent = 'Credits';
  const photosAuthors = document.createElement('p');
  photosAuthors.textContent =
    'Silvia Mc Donald, Sérgio Alves Santos, Jennifer Pallian and Marek Piwnicki';
  section.append(credits, photosAuthors);

  return section;
}

function loadAbout() {
  const main = document.querySelector('main');
  const about = createAbout();

  main.innerHTML = '';
  main.appendChild(about);
}

export default loadAbout;
