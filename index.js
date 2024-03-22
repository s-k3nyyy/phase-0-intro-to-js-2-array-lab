// Write your solution her
let cats = ["Milo", "Otis", "Garfield"];
let catsNames = ['collo', 'caleb', 'rita']

console.log(cats) ;
console.log(catsNames );
const destructivelyAppendCat =
  catsNames.push("salo");
console.log(catsNames)

const destructivelyPrependCat =
  catsNames.unshift("brian"); //puts newely entered cats names first
console.log(catsNames) // 

const destructivelyRemoveLastCat =
  catsNames.pop(); // Remove the last cat's name from the array
console.log(catsNames)

const destructivelyRemoveFirstCat = 
  catsNames.shift(); // Remove the first cat's name from the array
  console.log(catsNames)    

function appendCat(catsNames) {
return catsNames.concat([catsNames]);
}

function prependCat(cats) {
  return [cats, ...catsNames];
}
function removeLastCat() {
  return catsNames.slice(0, -1);
}

function removeFirstCat() {
  return catsNames.slice(1);
}

console.log(catsNames); 