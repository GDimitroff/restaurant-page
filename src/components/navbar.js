function createNavbar() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const liHome = document.createElement('li');
  const aHome = document.createElement('a');
  aHome.href = '#';
  aHome.textContent = 'Home';
  liHome.appendChild(aHome);

  const liMenu = document.createElement('li');
  const aMenu = document.createElement('a');
  aMenu.href = '#';
  aMenu.textContent = 'Menu';
  liMenu.appendChild(aMenu);

  const liAbout = document.createElement('li');
  const aAbout = document.createElement('a');
  aAbout.href = '#';
  aAbout.textContent = 'About';
  liAbout.appendChild(aAbout);

  ul.append(liHome, liMenu, liAbout);
  nav.appendChild(ul);

  return nav;
}

export default createNavbar;
