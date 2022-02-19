// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInt = function(min, max) {
	return Math.abs(Math.floor(Math.random() * (max - min)) + min);
}
console.log (getRandomInt(-295.23, "-290.23"));


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. 
const getRandomFloat = function(min, max, accuracy) {
	let rand = Math.random() * (max - min) + min;
	return Math.abs(rand.toFixed (accuracy > 16 || accuracy < -16 ? 16 : Math.abs(accuracy)));
}
console.log (getRandomFloat(0.638, -0.3434321, -1454));


// Обe функции переваривают любые числа (в том числе и строки), вне зависимости какое из них больше и выдают:
// getRandomFloat рандомное положительное целое число,
// getRandomFloat вещественное число.
// getRandomFloat также защищен от получения отрицательного количества знаков после запятой "accuracy"
// и не показывает количество превышающее 16.
// возможно в будущем есть смысл переделать getRandomFloat с использованием метода toPrecision, чтобы ограничить точность всего числа
// и избежать отображения "мусора"
