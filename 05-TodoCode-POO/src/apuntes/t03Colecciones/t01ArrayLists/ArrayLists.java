package apuntes.t03Colecciones.t01ArrayLists;

import java.util.ArrayList;
import java.util.List;

public class ArrayLists {
    public static void main(String[] args) {
        // Crear Lista:
        // List<Persona> lista;
        List<Persona> lista = new ArrayList<>();

        // Añadir lista:
        Persona person = new Persona(1, "Luisina", 30);
        lista.add(person);
        // o instanciando directamente
        lista.add(new Persona(2, "Gabby", 30));
        lista.add(new Persona(3, "Ada", 5));
        lista.add(new Persona(4, "Andrea", 36));

        System.out.println("-------------FOR CLASICO----------------");

        // recorrer por índice
        for (int i = 0; i < lista.size(); i++) {
            System.out.println("prueba: " + lista.get(i).getNombre());
        }

        System.out.println("-------------FOREACH----------------");
        // recorrido foreach
        for (Persona perso : lista) {
            System.out.println("prueba: " + perso.getNombre());
        }
        lista.forEach(element -> System.out.println(element.getEdad()));

    }
}
