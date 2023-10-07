function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(" ");

    // Reverse each word and store them in an array
    const reversedWords = words.map(word => {
        // Use split("") to convert the word into an array of characters,
        // reverse it, and then join it back into a word
        return word.split("").reverse().join("");
    });

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(" ");

    return reversedSentence;
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
