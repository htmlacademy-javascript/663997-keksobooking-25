const ARR_LENGTH = 10;
const typesOfPalaces = [
  'palace', 'flat', 'house', 'bungalow', 'hotel'
];
const times = [
  '12:00', '13:00', '14:00'
];
const features = [
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'
];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInt = function(min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min)) + min);
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloat = function(min, max, accuracy) {
  const rand = Math.random() * (max - min) + min;
  return Math.abs(rand.toFixed (accuracy > 16 || accuracy < -16 ? 16 : Math.abs(accuracy)));
};

const rndPhotos = function () {
  const photosArr = [];
  for (let i = 0; i < photos.length; i++){
    if (getRandomInt(0, 10) > 4){
      photosArr.push (photos[i]);
    }
  }
  return photosArr;
};


const rndFeatures = function () {
  const featuresArr = [];
  for (let i = 0; i < features.length; i++){
    if (getRandomInt(0, 10) > 3){
      featuresArr.push (features[i]);
    }
  }
  return featuresArr;
};

const getArr = function(length){
  const arr =[];
  const rndAdress =[];
  for (let i = 0; i < length; i++){
    rndAdress [0] = getRandomFloat(35.65, 35.7, 5);
    rndAdress [1] = getRandomFloat(139.7, 139.8, 5);
    arr[i] = {
      author: {
        avatar: `img/avatars/user${((i+1 < 10) ? (`0${i+1}.png`) : (`${i+1}.png`))}`
      },
      offer: {
        title: 'Заголовок',
        address: `${rndAdress [0]}, ${rndAdress [1]}`,
        price:  getRandomInt (15000, 25000),
        type: typesOfPalaces[getRandomInt(0,4)],
        rooms: getRandomInt(1,15),
        guests: getRandomInt(1,125),
        checkin: times[getRandomInt(0,2)],
        checkout: times[getRandomInt(0,2)],
        features: rndFeatures(),
        description: 'Описание помещения',
        photos: rndPhotos(),
      },
      location: {
        lat: rndAdress [0],
        lng: rndAdress [1],
      },
    };
  }
  return arr;
};
const newArr = getArr(ARR_LENGTH);
console.log (newArr);
