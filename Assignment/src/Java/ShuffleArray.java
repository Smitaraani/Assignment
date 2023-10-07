package Java;

import java.util.Collections;
import java.util.ArrayList;

public class ShuffleArray {
	
	 public static void main(String[] args) {
	        ArrayList<Integer> arrayList = new ArrayList<>();
	        arrayList.add(1);
	        arrayList.add(2);
	        arrayList.add(3);
	        arrayList.add(4);
	        arrayList.add(5);
	        arrayList.add(6);
	        arrayList.add(7);

	        // Shuffle the ArrayList
	        Collections.shuffle(arrayList);

	        // Print the shuffled ArrayList
	        System.out.println("Shuffled ArrayList: " + arrayList);
	    }
	}
	


