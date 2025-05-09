# Web-Client-Development first semester Mid Term projects.

## Details:

<details><summary>Hello, during my time at Cakrawala this repository was the one i made for my first semester MidTerm project.</summary><p>

<details><summary>Hello, this was the first part of the midterm.</summary><p>
  
## Details on the first MidTerm question.

### All is to write 5 distinc codes, seen in this section: (Javascript and TypeScript)
#### Write a code to find the area of a rectangle:
- input: Length = 5 , Width = 3
- output: Area = 15
###### My work:
```
//this is the intro using a simple console.log to create an output that cannot be interacted with by user
console.log("Hello, this is a calculator to calculate the area of a rectangle\n");
//setting variable with values except one because the variable area will hold the result
let width = 10, length = 20, area;
//displayng the values of width and length
console.log("Width is: ",width, "\n");
console.log("Length: ",length,"\n");
//calculating Area, multiplying symbol is *
area = width * length;
//placing the variable 'Area' after string message so it shows after it not before
console.log("The Area of this rectangle is: ", area);
```
- so for my work i created my own width being 10 while length is 20, which resulted in the area being 200.
#### Find the Diameter, Circumfrence, and Area of a circle:
- input: Radius = 5
- output: Diameter = 10 , Circumference = 31.4159 , Area = 78.539
###### My work:
```
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
```
- During my work i decided instead of multiplying radius by itself, i instead use exponents. Instead of creating a variable that represents Pi, i imported a math related file to import Pi automatically.
#### Find the angles of a triangle if two were given:
- input: a = 80 , b = 65
- output: 35
###### My work:
```
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
```
- during this work i used parenthese
#### Get the difference in time between two interval of dates in the form of days: (DD/MM/YYYY)
- input: date1 = 01-01-2025 , date2 = 03-01-2025
- output: 2
###### My work:
```
//this is the intro using a simple console.log to create an output that cannot be interacted with by user
console.log("Hello, this is a calculator to calculate the difference in day(s) between two dates\n");

//new date handles all things date related, it aslo expects (MM/DD/YYYY)
var date1 = new Date("1/1/2022");
var date2 = new Date("3/1/2022");

//Math abs is basically importing absolute function, getTime is to get time in miliseconds, which then is converted to days (1000 ms) (3600 sec) (24 hour). math ceiling is rounding it to the nearest integer
var difference = Math.abs(date2.getTime() - date1.getTime());
var days = Math.ceil(difference / (1000 * 3600 * 24));

console.log("Differences between two dates in days: ", days);
```
- during this work i had to learn all sorts of new methods in relation to date, which i found that in Javascript one can only use (MM/DD/YYYY) with the methods used. also note 3600 seconds was two 60 seconds combined for simplification purposes.
#### Only recognizes the initials within a string:
- input: John Doe
- output: JD
###### My work:
```
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
```
- i had to learn functions, then string, then subtracting those strings, then a bit of if without else, returning value.
</details>

<details><summary>Hello, this is the second part of midterm.</summary><p>

## Details on second coding assignment: (Due 16 March 2025 12:00 PM)

#### Write a code to convert fahrenheit to celcius:
- input: 100
- output: 212
###### My Work:
```
function getFahrenheitFromCelsius(celsius){
   return (celsius * (9 / 5)) + 32;
}

function getCelsiusFromFahrenheit(fahrenheit){
   return (fahrenheit - 32) * (5 / 9);
}
let fahrenheit = 100, celcius = 50;

console.log("farenheit to Celcius:", getFahrenheitFromCelsius(celcius));
console.log("celcius to ferenheit:", getCelsiusFromFahrenheit(fahrenheit));
```
I had already learned basic arithmatics from preivious works, i used parentheses as well.
#### Conversion of cm to km vice versa:
- input = 1000000 cm
- output = 1 km
###### My Work
```
function getcmtokm(cm){
   return cm / 1000000;
}

function getkmtocm(km){
   return km * 1000000;
}
let cm = 100, km = 50;

console.log("Cm to Km:", getcmtokm(cm));
console.log("Km to Cm:", getkmtocm(km));
```
uses basic arithmathics yet again.
###### odd or even number:
- input = 71
- output = odd
#### My Work:
```
// take input from user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
} //if number is odd
else {
    console.log("The number is odd.");
}
```
for this one i had to use a modulus arithmatic to calculate if inputted number is equal to zero, which will then le us know if it's even or not.
user input has been added.
###### Searched words deleted:
- input = "remove: Bel"
- input = "word is: Belladonna"
- output = "ladonna"
#### My work:
```
function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

let remover = prompt("Enter a collection of word or words you want removed: ");
let sentence = prompt("Enter a sentence: ");

console.log(remove_first_occurrence(sentence, remover));
```
from this the program had ro recognize a string and subtract it from a different string. i then made sure all of it is user input based
###### Palindrome:
- Input = madam
- output = true
#### my work:
```
function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

let remover = prompt("Enter a collection of word or words you want removed: ");
let sentence = prompt("Enter a sentence: ");

console.log(remove_first_occurrence(sentence, remover));
```
it uses bool, which then will also reverse the words, if both equals the same, then true, if not the false
</details>
<details><summary>Hello, this was the third part of midterm.</summary><p>

#### so mr Rony's assignment actually came with some purposeky planted bugs, such as:
- Wrong Code: 
```
<img src="./imgs/woman.svg" alt="illustration of a woman doing workout on a gym">
```
###### When it should have been:
- correct way: 
```
<img src="./images/woman.svg" alt="illustration of a woman doing workout on a gym">
```
- Note how it's not supposed to be imgs but rather images
- the affect was a loading error when trying to load the images unto the web.
#### he also added empty functions on css, such as
```
.text h1 span {
}
```
##### To which i added:
```
.text h1 span {
  font-family: 'Mulish', sans-serif; /* Change font family */
  font-weight: 700; /* Make the text bold */
  color: #0cba49; /* Change text color */
  text-transform: uppercase; /* Transform text to uppercase */
}
```
- the output of this code ended with a header that is with the specified coloured above.
##### how to rescale images using class:
```
<img src="images/Venusinweb.PNG" alt="one of my artwork." class="rescaled-image">
```
</details>
<details><summary>Hello, this was the fourth part of midterm.</summary><p>

#### To create a webpage with Vite that holds Home & Contact page.
We had a lot of creative liberty for this project, however i had quite a lot to learn because prior to this i have had no experience creating a webpage using Vite React.
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello & Welcome!</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
- The first part was learning that this (within "title") will hold the name of the web bar.
```
const Homepage = () => {
  return (
    <div className="intropage">
      <main className="main">
        <div className="top-rectangle"></div>
        <button className="home-button">
          <Link to="/other-artworks">My Other Artworks & Contact info</Link>
        </button>
        <img src="/girlinred.jpeg" alt="Girl in Red" className="landing-image" />
      </main>
      <main classname="about">
        <h1 className="aboutme">About Me.</h1>
        <div className="loremipsum">
          <h3 className="mypainting">The artwork above is a painting of my creation!<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></h3>
        </div>
      </main>
      <main classname="morestuff">
        <h1 className="aboutme">Other Stuff.</h1>
        <div className="loremipsum">
          <h2 className="titleofstuff">First.</h2>
        </div>
      </main>
      <footer>
        This was made possible by using Vite <img src="/vite.svg" alt="vite logo" className="vitelogo" />
      </footer>
    </div>
  );
}; 
```
- So for this part, this is the one that has my homepage design alongside many other things.
- notably there is the usage of "Link", which will be explore shortly. Point is though, when you click the button specified, it will take you to the contact page.
```
const OtherArtworksPage = () => (
  <div className="other-artworks">
    <div className="top-rectangle"></div>
    <h1 className="text-aligned">My Other Artworks</h1>
    <p>Sorry but this page is a working progress!.<br />You can see my work on IG: <Link to="/">@dan.sa.turn</Link><br />Contact my Email: danielbussiness2000@gmail.com</p>
    <Link to="/">Go Back to Home</Link>
    <footer>
      This was made possible by using Vite <img src="/vite.svg" alt="vite logo" className="vitelogo" />
    </footer>
  </div>
);
```
- This part has my contact & more of myartwork page.
- also uses "Link" where it can take you back to homepage.
```
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/other-artworks" element={<OtherArtworksPage />} />
      </Routes>
    </Router>
  );
};
```
- This is where the Links will go to, so that it can refer what page will open based on the path it was given to refer which is based on the element.
</details>
<details><summary>Hello, this was the fifth part of midterm.</summary><p>

#### This was the part where it showed the image of the pokemon Bulbasaur:

```
<img
    key={index}
    src="/bulbasaur.jpeg"
    alt="Bulbasaur"
    className="image"
    onClick={handleImageClick}
/>
```
Note: how there is onClick, that is because if you click the image, you will be transported to the state page.

#### This was the stat page:

```
<div className="details-page">
    <button className="back-button" onClick={handleBackClick}>
    Back
    </button>
    <img src="/bulbasaursprite.jpeg" alt="Bulbasaur Sprite" className="image" />
    <img src="/bubasaurstats.jpeg" alt="Bulbasaur Stats" className="image stats-image" />
</div>
```

#### This was the sort by buttons, meant to sort the image either into two columns or one:

```
<div className="sort-buttons">
    <button className="sort-button" onClick={toggleColumnLayout}>
        {columnLayout === 2 ? 'Sort by one' : 'sort by two'}
    </button>
    <button className="sort-button" onClick={toggleColumnLayout}>
        {columnLayout === 2 ? 'Sort by one' : 'sort by two'}
    </button>
</div>
```
</details>
<details><summary>Hello, this was the sixth part of midterm.</summary><p>

#### This was the part where it showed the image of the pokemon Bulbasaur:

```
<img
    key={index}
    src="/bulbasaur.jpeg"
    alt="Bulbasaur"
    className="image"
    onClick={handleImageClick}
/>
```
Note: how there is onClick, that is because if you click the image, you will be transported to the state page.

#### This was the stat page:

```
<div className="details-page">
    <button className="back-button" onClick={handleBackClick}>
    Back
    </button>
    <img src="/bulbasaursprite.jpeg" alt="Bulbasaur Sprite" className="image" />
    <img src="/bubasaurstats.jpeg" alt="Bulbasaur Stats" className="image stats-image" />
</div>
```

#### This was the sort by buttons, meant to sort the image either into two columns or one:

```
<div className="sort-buttons">
    <button className="sort-button" onClick={toggleColumnLayout}>
        {columnLayout === 2 ? 'Sort by one' : 'sort by two'}
    </button>
    <button className="sort-button" onClick={toggleColumnLayout}>
        {columnLayout === 2 ? 'Sort by one' : 'sort by two'}
    </button>
</div>
```

#### This is so that when you go back from stat page from home page, it does not restart back on top:

```
useEffect(() => {
    // Restore the scroll position when returning to the home page
    if (!showDetails) {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
      if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }
    }
  }, [showDetails]);
```

#### This is for the drop down menu:
```
div className="sort-buttons">
    {/* Dropdown for sorting */}
    <select
        className="sort-dropdown"
        onChange={(e) => {
        const selectedValue = e.target.value;
        console.log(`Select sort option: ${selectedValue}`);
        // Add sorting logic here based on selectedValue
        }}
    >
        <option value="default">Sort by</option>
    </select>
    {/* Existing toggle column layout button */}
    <button className="sort-button" onClick={toggleColumnLayout}>
        {columnLayout === 2 ? 'Sort by one' : 'Sort by two'}
    </button>
</div>
```
</details>
</details>
