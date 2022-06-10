export default function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('card--image');
  const image = document.createElement('img');
  image.src = item.imgUrl;
  image.alt = item.name;
  cardImage.appendChild(image);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card--content');
  const cardTitle = document.createElement('h1');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = item.name;
  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-description');
  cardDescription.textContent = item.description;
  cardContent.append(cardTitle, cardDescription);

  card.append(cardImage, cardContent);
  return card;
}
