package apuntes.t02PropiedadesPOO.t06Interfaces;

public class Circulo implements Figura, Dibujable, Rotable {

    private double radio;

    public Circulo() {
    }

    public Circulo(double radio) {
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        double PI = 3.14;
        double resultado = PI * radio * radio;
        return resultado;
    }

    @Override
    public void dibujar() {
        System.out.println("Estoy dibujando un círculo");
    }

    @Override
    public void rotar() {
        System.out.println("Estoy rotando");
    }
}