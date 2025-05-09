//this is the intro using a simple console.log to create an output that cannot be interacted with by user
console.log("Hello, this is a calculator to calculate the difference in day(s) between two dates\n");

//new date handles all things date related, it aslo expects (MM/DD/YYYY)
var date1 = new Date("1/1/2022");
var date2 = new Date("3/1/2022");

//Math abs is basically importing absolute function, getTime is to get time in miliseconds, which then is converted to days (1000 ms) (3600 sec) (24 hour). math ceiling is rounding it to the nearest integer
var difference = Math.abs(date2.getTime() - date1.getTime());
var days = Math.ceil(difference / (1000 * 3600 * 24));

console.log("Differences between two dates in days: ", days);
