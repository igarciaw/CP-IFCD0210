package apuntes.t01ClasesObjetosMetodos;

public class Alumno04metodoConstructor {

    int id;
    String name;
    String surname;

    // Constructor: Se llama igual que la clase
    // con Alt+Ins se puede crear el Constructor de forma automática

    // Constructor VACIO
    // Sirve para rellenarlo más tarde, pero así ya tener acceso a sus métodos
    public Alumno04metodoConstructor() {
    }
    // Constructor con parámetros
    public Alumno04metodoConstructor(int id, String name, String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}
