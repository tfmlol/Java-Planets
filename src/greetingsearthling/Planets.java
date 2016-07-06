package greetingsearthling;
import java.util.Scanner;
//imports the scanner library

public class Planets {


	public static void main(String[] args) {
		//Library
		Scanner usrInput = new Scanner(System.in);
		// Creates a new scanner for usrInputs
		
		//1. Ask user for their earthling weight
		System.out.print("How much do you weigh earthling? ");
		
		//2. Get and store users weight
		int weight = usrInput.nextInt(); // gets the user input and stores it as int
		
		//3. Display the planet options to pick from 
		System.out.println("****************************************");
		System.out.println("** Pick you desired planet earthling! **");
		System.out.println("****************************************");
		System.out.println("1. Jupiter");
		System.out.println("2. Mars");
		System.out.println("3. Mercury");
		System.out.println("4. Neptune");
		System.out.println("5. Pluto");
		System.out.println("6. Saturn");
		System.out.println("7. Uranus");
		System.out.println("8. Venus");
		System.out.println("9. <Exit>");
		System.out.print("Name your decision human! ");
		
		
		//4. Acept the users decision value
		int choice = usrInput.nextInt(); //
		
		//5. Calculate the weight conversions and return value to user
		
		double newWeight;
		// created a new int for storing the users and outputting new user weight value
		String planet;
		// created new String to store planet names
		switch(choice) {
			case 1: // Jupiter
				newWeight = weight * 2.64;
				planet = "Jupiter";
				break;
			case 2: // Mars
				newWeight = weight * 0.38;
				planet = "Mars";
				break;	
			case 3: // Mercury
				newWeight = weight * 0.37;
				planet = "Mercury";
				break;
			case 4: // Neptune
				newWeight = weight * 1.12;
				planet = "Neptune";
				break;
			case 5: // Pluto
				newWeight = weight * 0.04;
				planet = "Pluto";
				break;
			case 6: // Saturn
				newWeight = weight * 1.15;
				planet = "Saturn";
				break;
			case 7: // Uranus
				newWeight = weight * 1.15;
				planet = "Uranus";
				break;	
			case 8: // Venus
				newWeight = weight * 0.88;
				planet = "Venus";
				break;
			default:
				newWeight = weight;
				planet = "What?";
				System.out.println("Insignificant human, pick another option!");
		}
		// output weight to user
		System.out.println("You weigh " + weight + "lbs, on planet " + planet + " you'll weigh " + newWeight + " earth lbs.");
			
	}

}
