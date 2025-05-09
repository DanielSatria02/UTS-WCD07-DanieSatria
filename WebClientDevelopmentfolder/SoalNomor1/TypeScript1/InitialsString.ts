var getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

console.log(getInitials('Al Pacino'), 'Al Pacino');
console.log(getInitials('Beyonce Knowles'), 'Beyonce Knowles');

//its actually just the same as in JavaScript
