package apuntes.t03Colecciones.t05HashMaps;

import java.util.HashMap;
import java.util.Map;

public class HashMaps {
    public static void main(String[] args) {

        Map<Integer,String> mapPet = new HashMap<>();

        mapPet.put(01, "Ozzy");
        mapPet.put(02, "Goya");
        mapPet.put(03, "Siria");
        mapPet.put(04, "Junior");
        mapPet.put(05, "Taro");
        mapPet.put(06, "Ada");

        System.out.println("Mapa contiene V Ozzy: " + mapPet.containsValue("Ozzy"));
        System.out.println("Mapa contiene V Nala: " + mapPet.containsValue("Nala"));
        System.out.println("Mapa contiene K 06: " + mapPet.containsKey(06));
        System.out.println("Mapa contiene K 10: " + mapPet.containsKey(10));
        System.out.println("Mapa values: " + mapPet.values());
        System.out.println("Mapa keys: " + mapPet.keySet());
        System.out.println("Quién es el 02?: " + mapPet.get(02));

        System.out.println("\n");
        System.out.println("Añadimos al 10");
        mapPet.put(10, "Croqueta");
        System.out.println("Quién es el 10?: " + mapPet.get(10));
        System.out.println("Eliminamos al 10");
        mapPet.remove(10);
        System.out.println("Quién es el 10?: " + mapPet.get(10));


    }
}
