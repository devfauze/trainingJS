//We can use the try block to "try" to execute a part of our code and 
//together with it a catch block to "catch" errors and 
//execute code in the event of an error:
try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    // console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    // console.log(sum(13, "zero"))
} 
//In addition, we can define a parameter for the error object that was thrown, 
//declaring it in brackets after the word catch so that we can access the error data:
catch (error) {
    console.log("An error ocurred!")
    console.log(error.message)
} 

//Finally, we can also define, after the catch block, a finally block, 
//which will execute after the try block if everything goes well or 
//after the catch block if an error has occurred. It is literally a "finally":
finally {
    console.log('Calculations finished.')
}