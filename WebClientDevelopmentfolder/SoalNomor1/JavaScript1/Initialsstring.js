//this is the intro using a simple console.log to create an output that cannot be interacted with by user
console.log("Hello, this is to obtain the initials within a string\n");

//so first we use a function for this particular assignment, due to it being cleaner, and it shall be a string function
var getInitials = function (string) {
    //we make a variable called names because it will be used to hold our.. well.. names.. then we split it with the string.split
    var names = string.split(' ');
    // this is where we obtain the initials, remember that string counts at 0 which is why we put it as 0 after names, substring will extract characters or in this particular case the first name (0), the last name (1). Then turning it uppercase with the touppercase.
        initials = names[0].substring(0, 1).toUpperCase();
    //making sure the name inputted is greater than 1 which will have each letter be subtracted until it is just one letter
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    } //returning the value of initials
    return initials;
};
//calling function to convert names inputed
console.log(getInitials('Al Pacino'), "Al Pacino");
console.log(getInitials('Beyonce Carter'), "Beyonce Carter");
