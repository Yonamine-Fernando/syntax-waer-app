import tenisBranco from "@/assets/images/tenis-casual.jpg";
import tenisModerno from "@/assets/images/tenis-colorido.jpg";
import tenisCinza from "@/assets/images/tenis-esportivo.jpg";
import tenisFuturista from "@/assets/images/tenis-futurista.jpg";

interface Categorie {
  name: string;
  image: string;
}

export const categories: Categorie[] = [
  { name: "Casual", image: tenisBranco },
  { name: "Esporte", image: tenisCinza },
  { name: "Moderno", image: tenisModerno },
  { name: "Futurisma", image: tenisFuturista },
];
