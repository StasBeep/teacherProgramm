import java.util.Scanner; // Библиотека для работы с консолью в vs code

public class posledovatel {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in, "UTF-8");

        System.out.print("Введите число a: ");
        double a = scanner.nextDouble();

        System.out.print("Введите ццелое число a1: ");
        int a1 = scanner.nextInt();

        System.out.println("Ваше число a: " + a + " число a1: " + a1);

        int b = 4;
        int c = 6;

        double d = a + Math.sqrt(b) + c;

        System.out.println(d);
    }
}