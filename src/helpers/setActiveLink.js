export default function setActiveLink(link) {
  const links = document.querySelectorAll('nav > ul > li > a');

  links.forEach((link) => {
    if (link !== this) {
      link.classList.remove('active');
    }
  });

  link.classList.add('active');
}
