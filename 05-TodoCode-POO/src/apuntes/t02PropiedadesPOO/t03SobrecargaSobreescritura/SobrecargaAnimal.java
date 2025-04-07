package apuntes.t02PropiedadesPOO.t03SobrecargaSobreescritura;

public class SobrecargaAnimal {
    private int id_animal;
    private String descripcion;

    // constructores

    public SobrecargaAnimal(int id_animal, String descripcion) {
        this.id_animal = id_animal;
        this.descripcion = descripcion;
    }

    // getters y setters

    // otros métodos
    // La sobrecarga es tener varios métodos con el mismo nombre en la misma clase
    // El sistema entiende cuál usar por los parámetros que recibe

    public void hacerSonido() {
        System.out.println("El animal hace un sonido.");
    }

    public void hacerSonido(String nombreAnimal) {
        System.out.println("El animal " + nombreAnimal + " hace un sonido.");
    }

    public void hacerSonido(String nombreAnimal, String tipoSonido) {
        System.out.println("El animal " + nombreAnimal + " hace un sonido de tipo " + tipoSonido);
    }

    public static void main(String[] args) {
        SobrecargaAnimal animal = new SobrecargaAnimal(1, "koala");
        animal.hacerSonido();
        animal.hacerSonido("Koalanimation");
        animal.hacerSonido("Hurón", "dokea");

    }


}
