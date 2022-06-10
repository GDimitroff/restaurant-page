function createFooter() {
  const footer = document.createElement('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Developed with ♥ by ';

  const githubLink = document.createElement('a');
  githubLink.textContent = 'Gospodin Dimitrov';
  githubLink.href = 'https://github.com/GDimitroff';
  githubLink.target = '_blank';

  copyright.appendChild(githubLink);
  footer.appendChild(copyright);

  return footer;
}

export default createFooter;
