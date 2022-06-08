function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'HEADER!';

  header.appendChild(restaurantName);

  return header;
}

export default createHeader;
