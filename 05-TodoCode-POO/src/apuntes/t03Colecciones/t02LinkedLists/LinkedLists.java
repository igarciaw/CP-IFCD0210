package apuntes.t03Colecciones.t02LinkedLists;

import java.util.LinkedList;
import java.util.List;

public class LinkedLists {

    public static void main(String[] args) {
        List<Persona> lista = new LinkedList<>();

        Persona person = new Persona(1, "Luisina", 30);
        lista.add(person);
        // o instanciando directamente
        lista.add(new Persona(2, "Gabby", 30));
        lista.add(new Persona(3, "Ada", 5));
        lista.add(new Persona(4, "Andrea", 36));

        // Agregar al principio con el 0 como primer elemento del add
        lista.add(0, new Persona(5, "Ozzy", 100));

        // Ya no se puede recorrer con for estandar porque no tiene índices

        System.out.println("-------------FOREACH----------------");

        for (Persona perso : lista) {
            System.out.println("prueba: " + perso.getNombre());
        }
        lista.forEach(element -> System.out.println(element.getEdad()));
    }
}
