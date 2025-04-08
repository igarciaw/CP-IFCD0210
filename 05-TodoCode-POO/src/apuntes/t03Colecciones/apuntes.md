Las colecciones son similares a los arreglos pero dinámicos (puede variar tamaño y cantidad en el tiempo)

Se emplean mediante la interfaz "Collection" que permite:
- Añadir
- Eliminar
- Obtener tamaño de la colección
- ...

Tipos principales:
List (más usado)
Set
Queue
Map (más usado)


                                      LIST
               ···················I Collection·······················
               ·                        ·                           ·
             I List            A AbstractCollection                I Set
                ·                       ·                           ·
                 ······················  ···························
                       ·                                ·
                 A AbstractList                    A AbstractSet
                        ·                                ·
               ·····················            ··················
               ·                    ·           ·                ·
    A AbstractSequenceList    C ArrayList   C HashSet     C TreeHashSet
        ·                                      ·
    C LinkedList                        C LinkedHashSet



                 MAP
                I Map
             A AbstractMap
                   ·
         ······················
         ·                     ·
    C HashMap           C TreeHashMap
        ·
    C LinkedHashMap

## LISTAS
- Conjunto de elementos relacionados entre sí que tienen un determinado orden.
- (Al ser Colections) son de tamaño dinámico.
Tipos:
  - ArrayLists (FIFO)
  - LinkedLists (FIFO)
  - Stack (LIFO)

## ARRAYLISTS
Clase representada como matriz dinámica. Permite almacenar elementos.
Hereda de la clase AbstractList, la cual implementa la interfaz List.
Permite Colecciones o Elementos duplicados.
FIFO El orden de los registros es el orden en el que fueron insertados.
Tiene índice (permite acceso aleatorio).
Manipulación lenta (se recorre todo el array para hacer un cambio).
