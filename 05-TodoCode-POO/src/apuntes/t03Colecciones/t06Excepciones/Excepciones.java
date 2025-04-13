package apuntes.t03Colecciones.t06Excepciones;

public class Excepciones {
    public static void main(String[] args) {
        // int resultado = 1/0; //Exception in thread "main" java.lang.ArithmeticException: / by zero
        try {
            int resultado = 1/0;
        } catch (Exception e) {
            //throw new RuntimeException(e);
            System.out.println("NO SE PUEDE DIVIDIR ENTRE 0");
        }

        int [] numeros = {1, 2, 3, 4, 5};
        // System.out.println("La posición 5 es: " + numeros[5]); // Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
        try {
            System.out.println("La posición 5 es: " + numeros[5]);
        } catch (Exception e) {
            System.out.println("NO EXISTE EL ÍNDICE 5");
        }

    }
}
