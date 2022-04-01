import { newArr } from './data.js';
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

const addUsersCards = function () {
  const card = document.querySelector('#card').content;
  const newCard = [];
  for (let i = 0; i < newArr.length; i++) {

    newCard[i] = card.cloneNode(true);
    if (newArr[i].offer.title.length > 0){
      newCard[i].querySelector('.popup__title').textContent = newArr[i].offer.title;
    }
    else {
      newCard[i].querySelector('.popup__title').classList.add ('hidden');
    }
    if (newArr[i].offer.address.length > 0){
      newCard[i].querySelector('.popup__text--address').textContent = newArr[i].offer.address;
    }
    else {
      newCard[i].querySelector('.popup__text--address').classList.add ('hidden');
    }
    if (newArr[i].offer.price){
      newCard[i].querySelector('.popup__text--price').textContent = `${newArr[i].offer.price} ₽/ночь`;
    }
    else {
      newCard[i].querySelector('.popup__text--price').classList.add ('hidden');
    }
    if (newArr[i].offer.type.length > 0){
      newCard[i].querySelector('.popup__type').textContent = offerRu[newArr[i].offer.type];
    }
    else {
      newCard[i].querySelector('.popup__type').classList.add ('hidden');
    }
    if (newArr[i].offer.rooms && newArr[i].offer.guests){
      newCard[i].querySelector('.popup__text--capacity').textContent =
      `${newArr[i].offer.rooms} комнаты для ${newArr[i].offer.guests} гостей`;
    }
    else {
      newCard[i].querySelector('.popup__text--capacity').classList.add ('hidden');
    }
    if (newArr[i].offer.checkin.length > 0 && newArr[i].offer.checkout.length > 0){
      newCard[i].querySelector('.popup__text--time').textContent =
      `Заезд после ${newArr[i].offer.checkin}, выезд до ${newArr[i].offer.checkout}`;
    }
    else {
      newCard[i].querySelector('.popup__text--time').classList.add ('hidden');
    }
    if (newArr[i].offer.features.length > 0){
      newFeatureList(newCard[i].querySelector('.popup__features'), newArr[i].offer.features);
    }
    else {
      newCard[i].querySelector('.popup__features').classList.add ('hidden');
    }
    if (newArr[i].offer.description.length > 0){
      newCard[i].querySelector('.popup__description').textContent = newArr[i].offer.description;
    }
    else {
      newCard[i].querySelector('.popup__description').classList.add ('hidden');
    }
    if (newArr[i].offer.photos.length > 0) {
      newFotoList(newCard[i].querySelector('.popup__photos'), newArr[i].offer.photos);
    }
    else {
      newCard[i].querySelector('.popup__photos').classList.add ('hidden');
    }
    if (newArr[i].author.avatar.length > 0){
      newCard[i].querySelector('.popup__avatar').src = newArr[i].author.avatar;
    }
    else {
      newCard[i].querySelector('.popup__avatar').classList.add ('hidden');
    }
  }
  document.querySelector('#map-canvas').append(newCard[getRandomInt(0, newCard.length-1)]);
};

export {addUsersCards};
