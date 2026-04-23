import tenisBranco from "@/assets/images/tenis-casual.jpg";
import tenisModerno from "@/assets/images/tenis-colorido.jpg";
import tenisCinza from "@/assets/images/tenis-esportivo.jpg";
import tenisFuturista from "@/assets/images/tenis-futurista.jpg";
import { Button } from "../Button";

interface Categorie {
  name: string;
  image: string;
}

const categories: Categorie[] = [
  { name: "Casual", image: tenisBranco },
  { name: "Esporte", image: tenisCinza },
  { name: "Moderno", image: tenisModerno },
  { name: "Futurisma", image: tenisFuturista },
];

export const Categories = () => {
  return (
    <section className="container flex gap-3 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center h-125 bg-cover bg-center rounded-[20px] text-white shrink-0 w-[95%] md:w-1/2 lg:w-full snap-center"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
          <div className="relative">
            <Button variant="secondary">{category.name}</Button>
          </div>
        </div>
      ))}
    </section>
  );
};
