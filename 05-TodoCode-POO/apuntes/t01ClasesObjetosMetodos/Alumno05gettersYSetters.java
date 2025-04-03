package apuntes.t01ClasesObjetosMetodos;

public class Alumno05gettersYSetters {
    int id;
    String name;
    String surname;

    // Constructor
    public Alumno05gettersYSetters() {
    }
    public Alumno05gettersYSetters(int id, String name, String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    // Getters y Setters
    // Con alt+ins se pueden crear autom
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }
    public void setSurname(String surname) {
        this.surname = surname;
    }

}
