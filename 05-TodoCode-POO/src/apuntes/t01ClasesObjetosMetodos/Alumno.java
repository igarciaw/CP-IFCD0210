package apuntes.t01ClasesObjetosMetodos;

public class Alumno {

//    public
//    private
//    protected
    int id;
    String name;
    String surname;

    // Constructor
    public Alumno() {
    }
    public Alumno(int id, String name, String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    
    // Getters y Setters
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
