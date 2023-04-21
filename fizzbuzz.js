// Define a loop that will run from 1 to 100
for (let i = 1; i <= 100; i++) {
// Check if the current number is a multiple of both 3 and 5 using the modulus operator
if (i % 3 === 0 && i % 5 === 0) {
// If the number is a multiple of both 3 and 5, print "FizzBuzz"
console.log("FizzBuzz");
}
// Check if the current number is a multiple of 3 using the modulus operator
else if (i % 3 === 0) {
// If the number is a multiple of 3, print "Fizz"
console.log("Fizz");
}
// Check if the current number is a multiple of 5 using the modulus operator
else if (i % 5 === 0) {
// If the number is a multiple of 5, print "Buzz"
console.log("Buzz");
}
// If the number is not a multiple of 3 or 5, print the number itself
else {
console.log(i);
}
}


