import createNavbar from './navbar';

function createHeader() {
  const header = document.createElement('header');
  const navbar = createNavbar();
  header.appendChild(navbar);

  return header;
}

export default createHeader;
