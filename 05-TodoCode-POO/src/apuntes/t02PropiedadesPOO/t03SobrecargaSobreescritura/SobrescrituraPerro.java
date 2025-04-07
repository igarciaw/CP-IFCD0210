package apuntes.t02PropiedadesPOO.t03SobrecargaSobreescritura;

public class SobrescrituraPerro extends SobrescrituraAnimal{

    private String nombrePerro;
    private double peso;
    private double raza;
    private double sexo;

    // constructores

    // getters setters

    // otros métodos
    // Sobrescritura es cuando se sobrescribe un metodo padre para hacerlo específico del hijo
    @Override
    public void hacerSonido() {
        System.out.println("Soy perro y hago guau guau");
    }

}
