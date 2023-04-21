
// Define a function called getOddNumbers that takes an array as input
function getOddNumbers(arr) {
  // Initialize an empty array called oddNumbers
  const oddNumbers = [];

  // Loop through each element in the input array using a for loop
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is odd by checking if its remainder when divided by 2 is not equal to 0
    if (arr[i] % 2 !== 0) {
      // If the current element is odd, add it to the oddNumbers array using the push method
      oddNumbers.push(arr[i]);
    }
  }

  // Return the oddNumbers array
  return oddNumbers;
}

// Call the getOddNumbers function with the input array [2, 4, 6, 8, 11, 20, 15, 22] and store the resulting array in a variable called oddNumbersArray
const oddNumbersArray = getOddNumbers([2, 4, 6, 8, 11, 20, 15, 22]);

// Display the resulting array in the console using console.log
console.log(oddNumbersArray); // Output: [11, 15]
