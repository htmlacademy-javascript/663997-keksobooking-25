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
export {
  getRandomInt,
  getRandomFloat,
  rndArrey
};
