// This code is defining a loop that will run from 1 to 100 using a for loop.
for (let i = 1; i <= 100; i++) {
// Within the loop, the code is checking if the current number is a multiple of both 3 and 5 using the modulus operator.
if (i % 3 === 0 && i % 5 === 0) {
// If the current number is a multiple of both 3 and 5, the code prints "FizzBuzz"
console.log("FizzBuzz");
}
// If the current number is not a multiple of both 3 and 5, the code checks if the current number is a multiple of 3 using the modulus operator.
else if (i % 3 === 0) {
// If the current number is a multiple of 3, the code prints "Fizz"
console.log("Fizz");
}
// If the current number is not a multiple of both 3 and 5 or just 3, the code checks if the current number is a multiple of 5 using the modulus operator.
else if (i % 5 === 0) {
// If the current number is a multiple of 5, the code prints "Buzz"
console.log("Buzz");
}
// If the current number is not a multiple of both 3 and 5, just 3 or just 5, the code prints the current number.
else {
console.log(i);
}
}






