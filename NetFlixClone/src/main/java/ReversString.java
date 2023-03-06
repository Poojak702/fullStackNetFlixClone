import java.util.Scanner;
import java.util.stream.Stream;

public class ReversString 
{
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter String:");
		String str = sc.next();
		
		char[] ch = str.toCharArray();
		String output = "";
		StringBuilder str1 = new StringBuilder();
		int length = ch.length;
//		str1.append(ch);
//		System.out.println(ch);
		for(int i = length-1 ; i >=0  ; i--)
		{
			output += ch[i];
//			str1.append(ch);
		}
		
		System.out.println("Reverse String : " + output + str1);
				
	}
}
