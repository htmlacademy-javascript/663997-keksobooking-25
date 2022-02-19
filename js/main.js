// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInt = function(min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min)) + min);
};
console.log (getRandomInt(-295.23, '-290.23'));


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloat = function(min, max, accuracy) {
  const rand = Math.random() * (max - min) + min;
  return Math.abs(rand.toFixed (accuracy > 16 || accuracy < -16 ? 16 : Math.abs(accuracy)));
};
console.log (getRandomFloat(0.638, -0.3434321, -1454));
