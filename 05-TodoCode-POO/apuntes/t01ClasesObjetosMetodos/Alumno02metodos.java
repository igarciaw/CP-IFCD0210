package apuntes.t01ClasesObjetosMetodos;

public class Alumno02metodos {
    int id;
    String name;
    String surname;

    /*Métodos*/
    /*Verbos en infinitivo y representativos*/
    /* modificador-de-acceso - tipo-de-dato-devuelto - nombre-de-metodo */
    public void mostrarNombre() {
        System.out.println("Hola, soy un alumno y sé decir mi nombre");
    }

    public void knowApproved(int note) {
        if (note >= 6) {
            System.out.println("Aprobé");
        } else {
            System.out.println("No aprobé");
        }
    }
}
