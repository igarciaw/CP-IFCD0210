package apuntes.t02PropiedadesPOO.t05ClasesAbstractas;

public class Circulo extends Figura {

    private double radio;

    public Circulo() {
    }

    public Circulo(double x, double y, double radio) {
        super(x, y);
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        double PI = 3.14;
        double resultado = PI * radio * radio;
        return resultado;
    }
}
