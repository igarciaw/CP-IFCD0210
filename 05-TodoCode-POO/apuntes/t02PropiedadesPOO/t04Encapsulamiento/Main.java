package apuntes.t02PropiedadesPOO.t04Encapsulamiento;

public class Main {
    public static void main(String[] args) {
        Alumno alu1 = new Alumno();
        Alumno alu2 = new Alumno(1, "pepe", "papa");

        System.out.println("id: " + alu2.getId());
        System.out.println("nombre: " + alu2.getName());
        System.out.println("apellido: " + alu2.getSurname());

    }
}
