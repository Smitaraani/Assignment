package Java;

import java.util.HashSet;

public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = checkIfPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String input) {
        // Remove spaces and convert to lowercase for case insensitivity
        input = input.replaceAll(" ", "").toLowerCase();
        
        // Use a HashSet to store unique characters
        HashSet<Character> uniqueChars = new HashSet<>();
        
        // Iterate through the input string and add each character to the HashSet
        for (char c : input.toCharArray()) {
            uniqueChars.add(c);
        }
        
        // Check if the size of the HashSet is 26 (number of alphabets)
        return uniqueChars.size() == 26;
    }
}
