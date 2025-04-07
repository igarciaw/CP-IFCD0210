package apuntes.t02PropiedadesPOO.t05ClasesAbstractas;

public abstract class Figura {
    // Atributos en Protected para que sus hijas puedan usarlos
    protected double x; // pos en x
    protected double y; // pos en y

    // Constructor
    // Generamos constructores para que hijas puedan instanciar
    // Son protected para que solo hijas tengan acceso
    protected Figura() {
    }

    protected Figura(double x, double y) {
        this.x = x;
        this.y = y;
    }

    // Métodos
    // Abstracto porque es una clase abstracta y necesita un metodo abstracto
    // que es el que usarán sus hijas después
    public abstract double calcularArea();
}
