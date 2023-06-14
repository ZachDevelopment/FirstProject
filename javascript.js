
//VARIABLES 
//save info to remember for later 
//can be many different types of data 
//Examples are: numbers, strings, booleans, characters, etc 
//variables can be declared using the word var and assigned a value using the operand = 
//OPERANDS 
//Examples: + - / * % (remainder or modulo) 
//LOGIC 
//Examples: if statement, else statement 
//logic statements usually use logical operands 
//logical operand examples:  >, <, ==, !=, !, >=, <= 
//logical operand expressions always return/evaluate booleans

var TheirName = prompt("What is your name?")
var theirAge = prompt("What is your age?")
var theirYear = 2023 - theirAge
console.log("Hello " + TheirName + ". You're age is " + theirAge)
console.log("Did you know you were born in the year " + theirYear)
console.log("your birth year is " + (2050 - theirYear) + " away from the year 2050")
var drinkingAge = 21
if(theirAge < drinkingAge)
{
    console.log("you cannot drink")
}
else
{
    console.log("you are able to drink")
}
