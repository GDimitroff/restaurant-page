function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const div = document.createElement('div');
  div.textContent = 'FOOTER!';

  footer.appendChild(div);

  return footer;
}

export default createFooter;
