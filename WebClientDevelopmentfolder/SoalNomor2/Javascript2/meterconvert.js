function getcmtokm(cm){
   return cm / 1000000;
}

function getkmtocm(km){
   return km * 1000000;
}
let cm = 100, km = 50;

console.log("Cm to Km:", getcmtokm(cm));
console.log("Km to Cm:", getkmtocm(km));
