import cardImagem from "@/assets/images/card-imagem.jpg";
import galeriaTenisBrancoPreto from "@/assets/images/galeria-tenis-brancopreto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";


export const Gallery = () => {
    return (
        <section className="container max-h-227.5 grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-7 ">
            <div className="grid grid-rows-[2fr_1fr]  gap-2.5 md:gap-7  max-h-207.5 overflow-hidden ">
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden">
                        <img className="w-full h-full object-cover" src={cardImagem} alt="Imagem card" />
                    </div>

                    <Overlay
                        title="Kripton One"
                        subtitle="Estilo urbando com atitude"
                        className="inset-0 p-6 flex flex-col justify-center text-white text-center">
                        <Button variant="secondary">Feminino</Button>
                        <Button variant="secondary">Masculino</Button>
                    </Overlay>
                </div>
                <div className="rounded-2xl h-full w-full overflow-hidden ">
                    <img className="w-full h-full object-cover" src={galeriaTenisBrancoPreto} alt="Tenis preto e branco" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 max-h-207.5 md:gap-7 ">
                <div className="col-span-2 rounded-2xl overflow-hidden order-last md:order-first">
                    <img className="w-full h-full object-cover " src={galeriaTenisRoxo} alt="Tenis roxo" />
                </div>
                <div className="row-span-2 overflow-hidden rounded-2xl  ">
                    <img className="w-full h-full object-cover  " src={galeriaModelo} alt="Modelo" />
                </div>
               
                    <div className="rounded-2xl overflow-hidden flex justify-center items-center ">
                        <img className="h-full w-full object-cover " src={galeriaTenisColorido} alt="Tenis colorido" />
                    </div>
                    <div className="rounded-2xl h-full w-full overflow-hidden">
                        <img className="w-full h-full object-cover " src={galeriaTenisCinza} alt="Tenis Cinza" />
                    </div>
            </div>
        </section>
    );
};