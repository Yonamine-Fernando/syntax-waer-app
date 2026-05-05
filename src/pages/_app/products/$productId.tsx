import { createFileRoute, Link } from "@tanstack/react-router";
import { useContext } from "react";
import { CEPForm } from "../../../components/CEPForm";
import { products } from "../../../components/mocks/products";
import { BagContext } from "../../../contexts/BagContext";
import { formatCurrency } from "../../../helpers/currency-format";

export const Route = createFileRoute("/_app/products/$productId")({
  parseParams: (params) => ({
    productId: Number(params.productId),
  }),
  component: RouteComponent,
  head: ({ params }) => {
    const filterProduct = products.find((product) => product.id === Number(params.productId));

    const title = filterProduct
      ? `${filterProduct.name}- produtos - SyntaxWear`
      : "Produto não encontrado - Produtos -SyntaxeWear";

    return { meta: [{ title: title }] };
  },
});

function RouteComponent() {
  const { add } = useContext(BagContext);

  const { productId } = Route.useParams();

  const filteredProduct = products.find((product) => product.id === productId);

  if (!filteredProduct)
    return (
      <section className="container flex flex-col min-h-[73vh] justify-center text-center text-black mb-10 pt-40 md:pt-50 pb-10 md:px-10 ">
        <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
        <p className="mb-6">O produto que você está procurando não existe ou esgotou.</p>
        <Link className="text-accent hover:text-accent-hover underline" to="/products">
          Voltar para lista de produtos
        </Link>
      </section>
    );

  const originalPrice = filteredProduct.price ?? 0;
  const discontPrice = originalPrice * 0.9;
  const inInstallments = originalPrice / 6;

  return (
    <section className="container mb-10 pt-40 md:pt-50 pb-10 md:px-10">
      <nav className="text-black flex gap-3 text-sm mb-15 ml-8 md:ml-3">
        <Link to="/">Home</Link>
        <span className="text-gray-400">/</span>
        <Link to="/products">Products</Link>
        <span className="text-gray-400">/</span>
        <span className="font-semibold">{filteredProduct?.name}</span>
      </nav>
      <div className="flex justify-center gap-10 ">
        <img className="w-125 bg-white rounded-2xl " src={filteredProduct?.image} alt={filteredProduct?.name} />
        <div className="text-black">
          <h1 className="text-4xl font-bold mb-1">{filteredProduct?.name}</h1>
          <p className="mb-2">cor: {filteredProduct?.color}</p>
          <p className="line-through text-[#878787] text-sm">{formatCurrency(originalPrice)}</p>
          <p className="text-3xl font-bold mb-2">{formatCurrency(discontPrice)} no pix</p>
          <p className="text-sm text-[#878787]">
            Você economiza:<span className="font-semibold">10%</span>
          </p>
          <p className="mb-2">
            ou <span className="text-[#38373A] font-semibold">6X</span> de{" "}
            <span className="text-[#38373A] font-semibold">{formatCurrency(inInstallments)}</span>
          </p>

          <p className="max-w-125 my-5">{filteredProduct?.description}</p>

          <div className="mb-3">
            <p>Calcular o prazo de entrega</p>
            <CEPForm />
          </div>

          <button
            className="bg-black text-white p-5 w-full rounded-md cursor-pointer hover:bg-gray-700"
            onClick={() => add(filteredProduct)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
}
