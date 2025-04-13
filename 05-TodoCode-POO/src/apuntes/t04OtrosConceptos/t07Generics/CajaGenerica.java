package apuntes.t04OtrosConceptos.t07Generics;

public class CajaGenerica<T>{ // T de type
    private T contenido;

    public void setContenido(T contenido){
        this.contenido = contenido;
    }

    public T getContenido(){
        return contenido;
    }

}
