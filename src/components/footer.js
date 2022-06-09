function createFooter() {
  const footer = document.createElement('footer');

  const p = document.createElement('p');
  p.textContent = 'Developed with ♥ by ';

  const a = document.createElement('a');
  a.textContent = 'Gospodin Dimitrov';
  a.href = 'https://github.com/GDimitroff';
  a.target = '_blank';

  p.appendChild(a);
  footer.appendChild(p);

  return footer;
}

export default createFooter;
