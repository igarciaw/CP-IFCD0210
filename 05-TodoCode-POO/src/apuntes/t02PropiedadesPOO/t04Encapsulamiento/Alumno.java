package apuntes.t02PropiedadesPOO.t04Encapsulamiento;


public class Alumno {

//    private -> solo tiene acceso la propia clase
//    public -> acceso desde fuera
//    protected -> acceso desde clases hijas
    private int id;
    private String name;
    private String surname;

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

    // métodos
}
