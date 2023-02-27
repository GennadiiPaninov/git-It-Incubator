//You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
const uniTotal = s => {
  let r = 0;
  for (let i = 0; i < s.length; i++) {

    r += s[i].charCodeAt(0)
  }

  return r;
}
console.log(uniTotal("sssD"))



function countdown(n) {

  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

countdown(5);

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// округление вверх
const century = year => Math.ceil(year / 100)

century(2357);
// деление без остатка
const isDivisible = (n, x, y) => n % x == 0 && n % y == 0 ? true : false;
console.log(isDivisible(60, 5, 10))


const nearestSq = n => {

  let r = Math.sqrt(n)
  let s = Math.trunc(r)// целое число 
  if (n == 2) {
    return 1
  }
  if (Number.isInteger(r)) {
    return n
  } else if (r - s < 0.5) {
    return Math.pow(Math.floor(r), 2)

  } else {
    return Math.pow(Math.ceil(r), 2)
  }

}


console.log(nearestSq(10))
console.log(nearestSq(111))

console.log("Поиск элемента в массиве, возврат индекеса")
let array1 = [2, 3, 5, 7, 11];

const find = (a, e) => a.indexOf(e) == -1 ? "Not found" : a.indexOf(e);


console.log(find(array1, 5))

console.log("Конкотенация с терн")
function describeAge(a) {
  return "You're a(n) " + (
    a > 64 ? "elderly" :
      a > 17 ? "adult" :
        a > 12 ? "teenager" :
          "kid"
  );
}
console.log(describeAge(52))
console.log("Прототипы")

function Hero(n) {
  this.name = n || "Hero"
  this.position = "00"
  this.health = 100
  this.damage = 5
  this.experience = 0
}
console.log("Prise 3 по цене 2х")

const mango =(q, p)=>{
  if(q < 3){
    return q * p
  } else if( q % 3 == 0 ){
    return (q - q / 3) * p
    
  } else {
    
 return (q - (Math.trunc(q / 3))) * p
  }
}
const mango1 =(q, p)=> q < 3 ? q * p : q % 3 == 0 ? (q - q / 3) * p : (q - (Math.trunc(q / 3))) * p;

console.log(mango1(16, 5))
console.log(mango1(3, 3))
console.log(mango1(6, 3))

  console.log("Исходный массив")
  const arrVolume = Array.from({length: 100}, (_, index) => index + 1);

  console.log("Перемешали массив")
  const mixArr = arrVolume.sort(() => Math.random() - 0.5);

  console.log(mixArr)
  console.log("Сортировка массива по значению")
const arrsort = mixArr.sort(function(a, b) {
  return a - b;
});

console.log(arrsort)
console.log("Предотвращение мутации объекта, Object.freeze для предотвращения изменения данных.")
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS);
// объект заморожен
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
console.log("Если одно из props не поступило в функцию, его можно указать дефолтно ")
const increment = (number, value = 1) => number + value; // если value не поступил оно будет 1
console.log("Спред оператор ... в случае если много ... props")
// функция вычисляет сумму всех пропсов
const sum = (...args) => {
  let res = 0; 
console.log(args.length)
if(args.length == 0){
  return 0
} else if(args.length == 1 ){
  return args[0]
} else {
  for(let i =0; i <args.length ; i++){
    res += args[i]
  }
}
return res
   
}
console.log("Спред оператор расспаковывает массив ")
const maximus = Math.max(...mixArr);// выводит максимольное значение массива
console.log(maximus)
console.log(" Деструктуризация объекта")
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;