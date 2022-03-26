import {
  getRandomFloat,
  rndArrey,
  getRandomInt
}
  from './utilits.js';
const data = {
  ARR_LENGTH: 10,
  typesOfPalaces: [
    'palace', 'flat', 'house', 'bungalow', 'hotel'
  ],
  times: [
    '12:00', '13:00', '14:00'
  ],
  features: [
    'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'
  ],
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
};
const getArr = function (length) {
  const arr = [];
  const rndAdress = [];
  for (let i = 0; i < length; i++) {
    rndAdress[0] = getRandomFloat(35.65, 35.7, 5);
    rndAdress[1] = getRandomFloat(139.7, 139.8, 5);
    arr[i] = {
      author: {
        avatar: `img/avatars/user${((i + 1 < 10) ? (`0${i + 1}.png`) : (`${i + 1}.png`))}`
      },
      offer: {
        title: 'Заголовок',
        address: `${rndAdress[0]}, ${rndAdress[1]}`,
        price: getRandomInt(15000, 25000),
        type: data.typesOfPalaces[getRandomInt(0, 4)],
        rooms: getRandomInt(1, 15),
        guests: getRandomInt(1, 125),
        checkin: data.times[getRandomInt(0, 2)],
        checkout: data.times[getRandomInt(0, 2)],
        features: rndArrey(data.features),
        description: 'Описание помещения',
        photos: rndArrey(data.photos),
      },
      location: {
        lat: rndAdress[0],
        lng: rndAdress[1],
      },
    };
  }
  return arr;
};
const newArr = getArr(data.ARR_LENGTH);
export {newArr};
