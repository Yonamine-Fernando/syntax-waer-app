import { createFileRoute } from "@tanstack/react-router";
import OurStoresBanner from "@/assets/images/banner-our-stores.png";
import OurStoresImg1 from "../../../assets/images/loja-1.png";
import OurStoresImg2 from "../../../assets/images/loja-2.png";

export const Route = createFileRoute("/_app/our-stores/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Nossas Lojas - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="container py-5 md:py-10">
      <img
        className="h-80 md:h-125 rounded-[20px] object-cover w-full"
        src={OurStoresBanner}
        alt="Banner do interior da Loja"
      />

      <div className="">
        <h1 className="text-black text-2xl max-w-7xl m-auto my-20 text-center">
          Nossas lojas são o coração da nossa marca. Explore a coleção mais recente, experimente seus modelos favoritos
          e sinta o conforto da SyntaxWear pessoalmente.
        </h1>

        <section className="text-black w-full space-y-20">
          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <div className="text-center p-6">
              <h2 className="text-3xl mb-5">Novidade ao vivo</h2>
              <p>
                Descubra os lançamentos da temporada antes de todo mundo e experimente nossos estilos mais recentes de
                perto
              </p>
            </div>

            <img
              className="rounded-[20px] md:max-w-[42vw] aspect-10/7 object-cover size-full"
              src={OurStoresImg1}
              alt="Imagem do tênis do loja"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <img
              className="rounded-[20px] md:max-w-[42vw] aspect-10/7 object-cover size-full"
              src={OurStoresImg2}
              alt="Imagem do tênis do loja"
            />
            <div className="text-center p-6">
              <h2 className="text-3xl mb-5">Atendimento personalizado</h2>
              <p>
                Conte com dicas de estilo, sugestões exclusivas e suporte personalisado de quem realmente entende de
                moda
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
