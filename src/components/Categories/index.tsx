import { useRouter } from "@tanstack/react-router";
import { Button } from "../Button";
import { categories } from "../mocks/category";

export const Categories = () => {
  const router = useRouter();

  return (
    <section className="container flex gap-3 lg:grid lg:grid-cols-4 lg:gap-4 mb-5 md:mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {categories.map((category) => (
        <div
          key={category.name}
          className="relative flex items-center justify-center h-125 bg-cover bg-center rounded-[20px] text-white shrink-0 w-[95%] md:w-1/2 lg:w-full snap-center"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
          <div className="relative">
            <Button
              variant="secondary"
              onClick={() =>
                router.navigate({
                  to: "/products/category/$category",
                  params: { category: category.name.toLowerCase() },
                })
              }
            >
              {category.name}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
