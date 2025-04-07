package apuntes.t01ClasesObjetosMetodos;

public class Main {
    public static void main(String[] args) {
        Alumno alu1 = new Alumno();
        Alumno alu2 = new Alumno(1, "pepe", "perez");

        System.out.println("ID de alumno 2 es: " + alu2.getId());
        System.out.println("Nombre de alumno 2: " + alu2.getName());
        System.out.println("Apellido de alumno 2: " + alu2.getSurname());
        System.out.println("\n");

        alu1.setId(0);
        alu1.setName("Panda");
        alu1.setSurname("Mente");

        System.out.println("ID de alumno 1 es: " + alu1.getId());
        System.out.println("Nombre de alumno 1: " + alu1.getName());
        System.out.println("Apellido de alumno 1: " + alu1.getSurname());
        System.out.println("\n");

        alu2.setId(2);
        System.out.println("ID de alumno 2 es: " + alu2.getId());
    }
}
