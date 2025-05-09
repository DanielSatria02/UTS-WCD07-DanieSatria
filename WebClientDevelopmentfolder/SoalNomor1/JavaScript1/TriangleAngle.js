//this is the intro using a simple console.log to create an output that cannot be interacted with by user
console.log("Hello, this is a calculator to calculate the missing angle for a triangle\n");
//setting variables with value except one
let a = 80, b = 65, c;
//displayng the values of a & b
console.log("angle a is: ",a, "\n");
console.log("angle b is: ",b, "\n");

//i use parentheses to indicate which variables need to be calculated first according to PEMDAS
c = 180 - (a + b);

//placing the variables after their respective output to show result
console.log("The missingle angle is: ", c);
