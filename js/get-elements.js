import {newArr} from './data.js';
import { getRandomInt } from './utilits.js';

const offerRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const newFotoList = function (allFotoList, arrFromData) {
  const container = allFotoList;
  container.innerHTML = '';

  arrFromData.forEach((arrFrom) => {
    container.insertAdjacentHTML (
      'beforeend',
      `<img src="${arrFrom}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
  });
  // console.log (container.innerHTML);
  return container;
};

const newFeatureList = function (allFeatureList, arrFromData) {
  const container = allFeatureList;
  container.innerHTML = '';

  arrFromData.forEach((arrFrom) => {
    const listItem = document.createElement('li');

    listItem.classList.add('popup__feature');
    listItem.classList.add(`popup__feature--${arrFrom}`); container.append(listItem);
  });
  // console.log (container.innerHTML);
  return container;
};


const card = document.querySelector('#card').content;
const newCard = [];
for (let i = 0; i < newArr.length; i++) {
  newCard[i] = card.cloneNode(true);
  newCard[i].querySelector('.popup__title').textContent = newArr[i].offer.title;
  newCard[i].querySelector('.popup__text--address').textContent = newArr[i].offer.address;
  newCard[i].querySelector('.popup__text--price').textContent = `${newArr[i].offer.price} ₽/ночь`;
  newCard[i].querySelector('.popup__type').textContent = offerRu[newArr[i].offer.type];
  newCard[i].querySelector('.popup__text--capacity').textContent =
  `${newArr[i].offer.rooms} комнаты для ${newArr[i].offer.guests} гостей`;
  newCard[i].querySelector('.popup__text--time').textContent =
  `Заезд после ${newArr[i].offer.checkin}, выезд до ${newArr[i].offer.checkout}`;
  newFeatureList(newCard[i].querySelector('.popup__features'), newArr[i].offer.features);
  newCard[i].querySelector('.popup__description').textContent = newArr[i].offer.description;
  newFotoList(newCard[i].querySelector('.popup__photos'), newArr[i].offer.photos);
  newCard[i].querySelector('.popup__avatar').src = newArr[i].author.avatar;
}

document.querySelector('#map-canvas').append(newCard[getRandomInt(0, newCard.length-1)]);
