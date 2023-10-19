public class ReverseWordsInSentence {
    public static void main(String[] args) {
        String inputSentence = "This is a sunny day";
        String reversedSentence = reverseWords(inputSentence);
        System.out.println(reversedSentence);
    }

    public static String reverseWords(String sentence) {
        String[] words = sentence.split(" "); 
        StringBuilder reversedSentence = new StringBuilder();

        for (String word : words) {
            StringBuilder reversedWord = new StringBuilder(word).reverse(); 
            reversedSentence.append(reversedWord).append(" "); 
        }

        return reversedSentence.toString().trim();
    }
}
