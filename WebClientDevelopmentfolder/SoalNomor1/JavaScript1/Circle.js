//this is the intro using a simple console.log to create an output that cannot be interacted with by user
console.log("Hello, this is a calculator to calculate all possible info about a circle with a given radius\n");
//setting one variable with a value except a few because those variables will hold the result, also let will allow one to set something as a variable
let radius = 5, area, circumference, diameter;
//displayng the value of radius
console.log("radius is: ",radius, "\n");

//calculating Circumference, multiplying symbol is * alongside this math.pi is to import pi into the program
circumference = 2 * Math.PI * radius;
//calculating area with **2 which means a variable is squared
area = Math.PI * radius**2;
diameter = 2 * radius

//placing the variables after their respective output to show result
console.log("The area is: ", area);
console.log("The circumference is: ", circumference);
console.log("The diameter is: ", diameter);
