package apuntes.t02PropiedadesPOO.t01Herencia;

public class ExplicacionExtendsVariosConstructores extends Persona{
    // Va a heredar todas las propiedades de Persona (id, dni, nombre, apellido, domicilio, telefono)

    // Atributos propios
    int num_legajo;
    String cargo;
    Double sueldo;

    // constructor vacio
    public ExplicacionExtendsVariosConstructores() {
    }

    // constructor con solo los atributos propios
    public ExplicacionExtendsVariosConstructores(int num_legajo, String cargo, Double sueldo) {
        this.num_legajo = num_legajo;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

    // constructor con solo atributos de padre (Super)
    public ExplicacionExtendsVariosConstructores(int id, String dni, String nombre, String apellido, String domicilio, String telefono) {
        super(id, dni, nombre, apellido, domicilio, telefono);
    }

    // constructor con todos los atributos (propios y Super)
    public ExplicacionExtendsVariosConstructores(int id, String dni, String nombre, String apellido, String domicilio, String telefono, int num_legajo, String cargo, Double sueldo) {
        super(id, dni, nombre, apellido, domicilio, telefono);
        this.num_legajo = num_legajo;
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

}
