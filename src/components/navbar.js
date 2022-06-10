import loadHome from '../modules/home';

function createNavbar() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const homeButton = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = '#';
  homeLink.textContent = 'Home';
  homeButton.appendChild(homeLink);

  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;

    setActiveButton(homeLink);
    loadHome();
  });

  const menuButton = document.createElement('li');
  const menuLink = document.createElement('a');
  menuLink.href = '#';
  menuLink.textContent = 'Menu';
  menuButton.appendChild(menuLink);

  const aboutButton = document.createElement('li');
  const aboutLink = document.createElement('a');
  aboutLink.href = '#';
  aboutLink.textContent = 'About';
  aboutButton.appendChild(aboutLink);

  ul.append(homeButton, menuButton, aboutButton);
  nav.appendChild(ul);

  return nav;
}

export default createNavbar;
