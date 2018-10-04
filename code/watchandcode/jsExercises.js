// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// 2. Write a JavaScript program to print the contents of the current window.

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);

// 4. Write a JavaScript program to find the area of a triangle where lengths
// of the three of its sides are 5, 6, 7.

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction
// by periodically removing one letter from the end of the string and attaching it to
// the front.

// 6. Write a JavaScript program to determine whether a given year is a leap year in
// the Gregorian calendar.
year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);


// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');


// 8. Write a JavaScript program where the program takes a random integer between 1 to 10,
// the user is then prompted to input a guess number. If the user input matches with guess
// number, the program will display a message "Good Work" otherwise display a message
// "Not matched".
