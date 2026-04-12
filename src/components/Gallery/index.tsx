import cardImagem from "@/assets/images/card-imagem.jpg";
import galeriaTenisBrancoPreto from "@/assets/images/galeria-tenis-brancopreto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import { Button } from "../Button";


export const Gallery = () => {
    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 gap-7.5">
            <div className="grid grid-rows-[2fr_1fr] gap-7.5 h-full overflow-hidden ">
                <div className="relative">
                    <div className="rounded-2xl h-full w-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={cardImagem} alt="Imagem card" /></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-center text-white text-center">
                        <p className="font-semibold text-lg">Kripton One</p>
                        <h2 className="text-3xl font-bold mb-4">Estilo urbando com atitude</h2>
                        <div className="flex justify-center items-center gap-4">
                            <Button variant="secondary">Feminino</Button>
                            <Button variant="secondary">Masculino</Button>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl h-full w-full overflow-hidden">
                    <img className="w-full h-full" src={galeriaTenisBrancoPreto} alt="Tenis preto e branco" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-7.5 ">
                <div className="col-span-2 rounded-2xl overflow-hidden order-last md:order-first">
                    <img className="w-full h-full " src={galeriaTenisRoxo} alt="Tenis roxo" />
                </div>
                <div className="row-span-2 rounded-2xl overflow-hidden h-full">
                    <img className="w-full h-full " src={galeriaModelo} alt="Modelo" />
                </div>

                <div className="rounded-2xl h-full w-full overflow-hidden">
                    <img className="w-full h-full " src={galeriaTenisCinza} alt="Tenis Cinza" />
                </div>
                <div className="rounded-2xl h-full w-full overflow-hidden">
                    <img className="h-full w-full " src={galeriaTenisColorido} alt="Tenis colorido" />
                </div>
            </div>

        </section>
    );
};