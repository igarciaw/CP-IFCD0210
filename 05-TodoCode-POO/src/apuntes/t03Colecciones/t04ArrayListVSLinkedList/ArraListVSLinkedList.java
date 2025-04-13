package apuntes.t03Colecciones.t04ArrayListVSLinkedList;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class ArraListVSLinkedList {

    public static void main(String[] args) {

        List<Persona> listArray = new ArrayList<>();
        listArray.add(new Persona(1, "Luisina", 30));
        listArray.add(new Persona(2, "Gabby", 30));
        listArray.add(new Persona(3, "Ada", 5));
        listArray.add(new Persona(4, "Andrea", 36));

        LinkedList<Persona> listaLinked = new LinkedList<>();
        listaLinked.add(new Persona(2, "Gabby", 30));
        listaLinked.add(new Persona(3, "Ada", 5));
        listaLinked.add(new Persona(4, "Andrea", 36));
        listaLinked.add(new Persona(5, "Ozzy", 100));

        // Remove en ArrayList
        listArray.remove(1);

        //Remove en LinkedList
        String nombreBorrar = "Gabby";
//        listaLinked.forEach(element -> {
//            if (element.getNombre().equals(nombreBorrar)) {
//                listaLinked.remove(element);
//            }
//        });

        for (Persona persona2 : listaLinked) {
            if (persona2.getNombre().equals(nombreBorrar)) {
                listaLinked.remove(persona2);
                break;
            }
        }

        System.out.println("-> DESPUES DE ELIMINAR <-");

        System.out.println("- ARRAY LIST");
        listArray.forEach(el -> System.out.println(el.getNombre()));


        System.out.println("- LINKED LIST");
        listaLinked.forEach(el -> System.out.println(el.getNombre()));

        System.out.println("\n-> TAMAÑO LISTAS <-");
        System.out.println("ArrayList: " + listArray.size());
        System.out.println("LinkedList: " + listaLinked.size());

        System.out.println("\n-> OBTENER ELEMENTOS <-");
        System.out.println("LinkedList - Primer elemento: " + listaLinked.getFirst().toString());
        System.out.println("LinkedList - Último elemento: " + listaLinked.getLast().toString());

        System.out.println("\n-> BORRAR LISTAS <-");
        listArray.clear();
        listaLinked.clear();

        //Comprobar si está vacía
        System.out.println("-> ¿SE HAN VACIADO LAS LISTAS? <-");
        System.out.println("ArraList: " + listArray.isEmpty());
        System.out.println("ArraList: " + listaLinked.isEmpty());


    }
}
