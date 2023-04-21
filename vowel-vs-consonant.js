
// create a function that initializes two variables, consonantsCount and vowelsCount, to count the number of consonants and vowels in the input word.

function countConsonantsAndVowels(word) {
    // Initialize variables to count consonants and vowels
    let consonantsCount = 0;
    let vowelsCount = 0;
  
    // Loop through each character in the word
    for (let i = 0; i < word.length; i++) {
      // Check if the current character is a vowel
      if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
        // If the current character is a vowel, increment the vowels count
        vowelsCount++;
      } else {
        // If the current character is not a vowel, it must be a consonant, so increment the consonants count
        consonantsCount++;
      }
    }
  
    // Print the word followed by how many consonants and vowels it has
    console.log(word + ' has ' + consonantsCount + ' consonants and ' + vowelsCount + ' vowels');
  }
  
  // Example usage:
  countConsonantsAndVowels('hello'); // Output: "hello has 3 consonants and 2 vowels"
  
