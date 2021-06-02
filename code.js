// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name)
{
    if (name === undefined || name === true || name === false)
    {
        return "Hello, World!";
    }
    else
    {
        return "Hello, " + name + "!";
    }
}

function isFive(number)
{
    if (number == 5) {return true}
    else {return false}
}

function isEven(number)
{
    if (typeof number === "boolean") {return false}
    if(number % 2 === 0) { return true}
    else {return false}
}

function isVowel(letter)
{
    if (isNaN(letter) === false || letter === true || letter === false || letter === undefined)
    {
        return false;
    }

    letter = letter.toLowerCase();

    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y")
    {
        return true;
    }

    else {return false}
}


//COME BACK TO
function testDrive(numb_one, numb_two)
{
    if (isNaN(numb_one) === true || isNaN(numb_two) === true)
    {
        return NaN;
    }

   else {return (Number(numb_one) + Number(numb_two))};
}
