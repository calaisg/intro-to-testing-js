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

