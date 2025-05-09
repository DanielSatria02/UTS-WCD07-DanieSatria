var date1 = new Date(2025, 1, 1);
var date2 = new Date(2025, 2, 1);
var diff = Math.abs(date1.getTime() - date2.getTime());
var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
console.log("Difference in Days: " + diffDays);

//note this is actually similar to Javascript's codes, main difference that needs to be looked at is really the dates uses commas
