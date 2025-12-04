public class chikli {
    public static void main(String[] args){
        double y;

        for(double x = -4; x <= 4; x+=0.5){
            if(x <= 0){
                y = Math.pow(x, 2) - 1;
                System.out.println("y = " + y + " x = " + x);
            } else if(x > 0 && x <= 1.5) {
                y = Math.cos(x);
                System.out.println("y = " + y + " x = " + x);
            } else {
                y = Math.sin(x-1);
                System.out.println("y = " + y + " x = " + x);
            }
        }
    }
}