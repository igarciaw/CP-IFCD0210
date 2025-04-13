package apuntes.t04OtrosConceptos.t07Generics;

public class Main {
    public static void main(String[] args) {
        CajaGenerica<String> cajaDeStrings = new CajaGenerica<>();
        cajaDeStrings.setContenido("Un string");
        cajaDeStrings.setContenido("otro string");
        String contenidoDeCajaDeStrings = cajaDeStrings.getContenido();

        System.out.println("Contenido de caja de Strings: " + contenidoDeCajaDeStrings);

        CajaGenerica<Integer> cajaDeEnteros = new CajaGenerica<>();
        cajaDeEnteros.setContenido(1234);
        Integer contenidoDeCajaDeEnteros = cajaDeEnteros.getContenido();

        System.out.println("Contenido de caja de Enteros: " + contenidoDeCajaDeEnteros);
    }
}
