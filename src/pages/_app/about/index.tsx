import { createFileRoute, Link } from "@tanstack/react-router";
import bannerAbout from "../../../assets/images/about.jpg";

export const Route = createFileRoute("/_app/about/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Sobre - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="flex flex-col md:flex-row items-center md:h-screen">
      <div className="h-150 md:h-full md:w-1/2">
        <img className="size-full object-cover" src={bannerAbout} alt="Banner homem sentado com o tênis da marca" />
      </div>

      <div className="text-black px-8 py-16 lg:px-20 md:w-1/2 h-full flex flex-col justify-center">
        <h2 className="text-5xl lg:text-6xl front-medium text-heading mb-8">Sobre nós</h2>

        <p className="text-text-tertiary text-lg leading-relaxed mb-8">
          Somos apaixonados por calçados que enem estilo, conforto e durabilidade. Nossa missão: Fazer você sentir-se
          bem a cada passo, oferencendo uma expirência de compra incrínvel e uma seleção de tênis, botas sapatos para
          todas as ocaciões.
        </p>

        <Link
          className=" self-start text-xs font-bold text-gray-text uppercase border-b-2 tracking-[2.5px] hover:text-accent transition-colors duration-500
        "
          to="/our-stores"
        >
          Saiba mais sobre nossas lojas
        </Link>
      </div>
    </section>
  );
}
