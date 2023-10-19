public class ReverseWordsInSentence {
    public static void main(String[] args) {
        String input = "This is a sunny day";
        String reversedSentence = reverseWordsInSentence(input);
        System.out.println(reversedSentence);
    }

    public static String reverseWordsInSentence(String sentence) {
        String[] words = sentence.split(" ");
        StringBuilder reversedSentence = new StringBuilder();

        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            String reversedWord = reverseWord(word);
            reversedSentence.append(reversedWord);

            // Add a space if it's not the last word
            if (i < words.length - 1) {
                reversedSentence.append(" ");
            }
        }

        return reversedSentence.toString();
    }

    public static String reverseWord(String word) {
        StringBuilder reversedWord = new StringBuilder();
        for (int i = word.length() - 1; i >= 0; i--) {
            reversedWord.append(word.charAt(i));
        }
        return reversedWord.toString();
    }
}
