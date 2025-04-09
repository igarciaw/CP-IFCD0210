## ARRAYLISTS
- Clase representada como matriz dinámica. Permite almacenar elementos.
- Hereda de la clase AbstractList, la cual implementa la interfaz List.
- Permite Colecciones o Elementos duplicados.
- FIFO El orden de los registros es el orden en el que fueron insertados.
- Tiene índice (permite acceso aleatorio).
- Manipulación lenta (se recorre todo el array para hacer un cambio).



Para crear:
    List<Persona> lista;
Sin olvidar importar:
    import java.util.List;

####

Si creamos instanciando objeto:
    List<Persona> lista = new ArrayList<Persona>();
Importar:
    import java.util.ArrayList;

###
Agregar elemento
    variable.add(elemento)
Ej
    lista.add(person);

Se puede instanciar directamente:
    lista.add(new Persona(2, "Gabby", 30));