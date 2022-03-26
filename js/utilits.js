import {data} from './data.js';
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInt = function (min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min)) + min);
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloat = function (min, max, accuracy) {
  const rand = Math.random() * (max - min) + min;
  return Math.abs(rand.toFixed(accuracy > 16 || accuracy < -16 ? 16 : Math.abs(accuracy)));
};

const rndArrey = function (arr) {
  const rndArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (getRandomInt(0, 10) > 3) {
      rndArr.push(arr[i]);
    }
  }
  return rndArr;
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