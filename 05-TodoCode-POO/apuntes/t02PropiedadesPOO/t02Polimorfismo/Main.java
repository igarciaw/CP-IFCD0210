package apuntes.t02PropiedadesPOO.t02Polimorfismo;

public class Main {

    public static void main(String[] args) {

        Persona vector[] = new Persona [5];
        vector [0] = new Persona();
        vector [1] = new Empleado();
        vector [2] = new Consultor();
        vector [3] = new Jefe();
//        vector [4] = "Hola";
//        Da error porque el vector solo puede almacenar datos de tipo "Persona"
//        Como Persona es la clase madre y Empleado, Consultor y Jefe son extensiones de Persona (hijas), el polimorfismo permite almacenar en el vector

        Persona perso = new Persona();
        Consultor consul = new Consultor();

        perso = consul;
//        consul = perso; Da error porque
    }
}
