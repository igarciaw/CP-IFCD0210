package apuntes.t03Colecciones.t04StacksPilas;

import java.util.Stack;

public class Stacks {

    // LIFO
    // métodos propios

    public static void main(String[] args) {
        Stack<Integer> pila = new Stack<>();
        System.out.println("Pila vacía: " + pila);
        System.out.println("Está vacía?: " + pila.isEmpty());

        // agregar
        pila.push(1);
        pila.push(2);
        pila.push(3);
        pila.push(4);
        pila.push(5);

        // recorrido
        System.out.println("Recorrido: ");
        for (Integer el : pila) {
            System.out.println(el);
        }

        // mostrar
        System.out.println("Pila: " + pila);
        System.out.println("Está vacía?: " + pila.isEmpty());

        System.out.println("Último agregado: " + pila.peek());
        pila.pop();
        System.out.println("Eliminamos el último con pop");
        System.out.println("Último elemento de la pila: " + pila.peek());

        System.out.println("En qué índice está el 3?: " + pila.search(3));
        System.out.println("En qué índice está el 5?: " + pila.search(5));

    }
}
