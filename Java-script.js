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

const century = year => Math.ceil(year / 100)

century(2357);
const isDivisible = (n, x, y) => n % x == 0 && n % y == 0 ? true : false;
console.log(isDivisible(60, 5, 10))


const nearestSq = n => {

  let r = Math.sqrt(n)
  let s = Math.trunc(r)
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

let array1 = [2, 3, 5, 7, 11];

const find = (a, e) => a.indexOf(e) == -1 ? "Not found" : a.indexOf(e);


console.log(find(array1, 5))

function describeAge(a) {
  return "You're a(n) " + (
    a > 64 ? "elderly" :
      a > 17 ? "adult" :
        a > 12 ? "teenager" :
          "kid"
  );
}
console.log(describeAge(52))

function Hero(n) {
  this.name = n || "Hero"
  this.position = "00"
  this.health = 100
  this.damage = 5
  this.experience = 0
}

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

  const arrVolume = Array.from({length: 100}, (_, index) => index + 1);

  console.log("Перемешали массив")
  const mixArr = arrVolume.sort(() => Math.random() - 0.5);

  console.log(mixArr)
const arrsort = mixArr.sort(function(a, b) {
  return a - b;
});

console.log(arrsort)
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const increment = (number, value = 1) => number + value;
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
const maximus = Math.max(...mixArr);
console.log(maximus)
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

const getStatus = isBusy => ({ status: isBusy ? "busy" : "available" });

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
delete foods.oranges;
delete foods.plums;
console.log(foods);


console.log(foods.hasOwnProperty("grapes"))
console.log("grapes" in foods)
function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;

}

function getArrayOfUsers(obj) {
   return Object.keys(obj)
 
  
}
function mazeRunner(maze, directions) {
  let coords
  for(let i = 0;i<maze.length;i++){
    if(maze[i].indexOf(2) !== -1){
      coords = [i, maze[i].indexOf(2)]
      break;
    }
  }
  for(let i = 0;i<directions.length;i++){
    switch(directions[i]){
      case "N":
        coords[0] -= 1
        break;
      case "S":
        coords[0] += 1
        break;
      case "E":
        coords[1] += 1
        break;
      case "W":
        coords[1] -= 1
        break;
    }
    if(maze[coords[0]] == undefined  || maze[coords[0]][coords[1]] == undefined) return "Dead"
    if(maze[coords[0]][coords[1]] == 0) continue;
    if(maze[coords[0]][coords[1]] == 1) return "Dead"
    if(maze[coords[0]][coords[1]] == 3) return "Finish"
  }
  return "Lost"
}
function mazeRunner(maze, directions) {
  var size=maze.length,i=-1,j=-1,di={N:-1,S:1,E:0,W:0},dj={W:-1,E:1,N:0,S:0}
  while(!maze[++i].includes(2));while(maze[i][++j]!=2);
  for(var s of directions){
    i+=di[s],j+=dj[s]
    if(i<0||j<0||i>=size||j>=size||maze[i][j]==1) return "Dead"
    if(maze[i][j]==3) return "Finish"
  }
  return "Lost"
}
function findArr(arrA, arrB, rng, wanted) {
  const filteredA = arrA.filter((el) => el >= rng[0] && el <= rng[1] && (wanted === 'odd' ? el % 2 : !(el % 2)))
  const filteredB = arrB.filter((el) => el >= rng[0] && el <= rng[1] && (wanted === 'odd' ? el % 2 : !(el % 2)))
  const tesrArr = [...new Set([...filteredA, ...filteredB])]
  const res = []


  for (let i = 0; i < tesrArr.length; i++) {
    const moreOneA = filteredA.indexOf(tesrArr[i]) !== filteredA.lastIndexOf(tesrArr[i]);
    const moreOneB = filteredB.indexOf(tesrArr[i]) !== filteredB.lastIndexOf(tesrArr[i]);
    console.log(moreOneA, moreOneB);

    if (moreOneA && moreOneB) {
      res.push(tesrArr[i])
    }
  }
  return res.sort((a, b) => a - b)

}
const vowelOne= (s) => {
  const regEx = /[aeiou]/
  const result = s.split("").map(letter =>{
    return regEx.test(letter.toLowerCase()) ? "1" : "0"
  }).join("")
  return result
}