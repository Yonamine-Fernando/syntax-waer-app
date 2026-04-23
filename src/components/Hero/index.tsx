import Banner from "@/assets/images/banner.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";

export const Hero = () => {
  return (
    <div className="container ">
      <section className="relative h-125 rounded-[20px] mb-10">
        <img src={Banner} alt="Banner principal SyntaxWear" className="w-full h-full object-cover rounded-[20px]" />
        <Overlay
          title="Kriton One"
          subtitle="Transforme qualquer passo em presença"
          className="bottom-0 justify-end px-6 md:px-24 pb-32 md:items-end"
        >
          <Button variant="secondary">ver modelos</Button>
          <Button>Comprar</Button>
        </Overlay>
      </section>
    </div>
  );
};
