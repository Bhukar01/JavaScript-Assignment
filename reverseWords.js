function reverseWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Reverse each word and store them in an array
  const reversedWords = words.map((word) => {
    // Use the `split('')`, `reverse()`, and `join('')` methods to reverse the word
    return word.split("").reverse().join("");
  });

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
