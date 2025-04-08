package apuntes.t02PropiedadesPOO.t07pokemonPOO;

public class Charmander extends Pokemon implements IFuego{
    public Charmander() {
    }

    // extends Pokemon
    @Override
    protected void atacarPlacaje() {
        System.out.println("Soy  Charmander  y  estoy  atacando  con  placaje");
    }

    @Override
    protected void atacarAranazo() {
        System.out.println("Soy  Charmander  y  estoy  atacando  con  arañazo");
    }

    @Override
    protected void atacarMordisco() {
        System.out.println("Soy  Charmander  y  estoy  atacando  con  mordisco");
    }

    // implements IFuego
    @Override
    public void atacarPunioFuego() {
        System.out.println("Soy  Charmander  y  estoy  atacando  con  punio fuego");
    }

    @Override
    public void atacarAscuas() {
        System.out.println("Soy  Charmander  y  estoy  atacando  con  ascuas");
    }

    @Override
    public void atacarLanzaLlamas() {
        System.out.println("Soy  Charmander  y  estoy  atacando  con  lanza llamas");
    }
}
