package apuntes.t02PropiedadesPOO.t07pokemonPOO;

public class Main {
    public static void main(String[] args) {
        Pikachu pika = new Pikachu();
        Squirtle squirtle = new Squirtle();
        Charmander charmander = new Charmander();
        Bulbasaur bulb = new Bulbasaur();

        pika.atacarAranazo();
        pika.atacarRayoCarga();
        squirtle.atacarAranazo();
        squirtle.atacarHidrobomba();
        bulb.atacarAranazo();
        bulb.atacarLatigoCepa();
        charmander.atacarAranazo();
        charmander.atacarLanzaLlamas();

    }
}
