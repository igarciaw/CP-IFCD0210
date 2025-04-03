package apuntes.t02PropiedadesPOO.t01Herencia;

public class HerenciaMain {

    public static void main(String[] args) {

        Empleado emple = new Empleado();
        emple.getNum_legajo();
        emple.getNombre();

        Consultor consult = new Consultor();
        consult.getNumero_consultor();
        consult.getNombre();
    }
}
