package apuntes.t02PropiedadesPOO.t07pokemonPOO;

public class Squirtle extends Pokemon implements IAgua{
    public Squirtle() {
    }

    // extends Pokemon
    @Override
    protected void atacarPlacaje() {
        System.out.println("Soy  Squirtle  y  estoy  atacando  con  placaje");
    }

    @Override
    protected void atacarAranazo() {
        System.out.println("Soy  Squirtle  y  estoy  atacando  con  arañazo");
    }

    @Override
    protected void atacarMordisco() {
        System.out.println("Soy  Squirtle  y  estoy  atacando  con  mordisco");
    }

    // implements IAgua
    @Override
    public void atacarHidrobomba() {
        System.out.println("Soy  Squirtle  y  estoy  atacando  con  hidro bomba");
    }

    @Override
    public void atacarPistolaAgua() {
        System.out.println("Soy  Squirtle  y  estoy  atacando  con  pistola agua");
    }

    @Override
    public void atacarBurbuja() {
        System.out.println("Soy  Squirtle  y  estoy  atacando  con  burbuja");
    }

    @Override
    public void atacarHidropulso() {
        System.out.println("Soy  Squirtle  y  estoy  atacando  con  hidropulso");
    }
}
