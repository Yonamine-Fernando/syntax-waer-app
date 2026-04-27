import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../components/mocks/products";
import { formatCurrency } from "../../../helpers/currency-format";
import { useContext } from "react";
import { BagContext } from "../../../contexts/BagContext";

export const Route = createFileRoute("/_app/products/$productId")({
  parseParams: (params) => ({
    productId: Number(params.productId),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { add } = useContext(BagContext);

  const { productId } = Route.useParams();

  const filteredProduct = products.find((product) => product.id === productId);

  if (!filteredProduct) return;

  const originalPrice = filteredProduct?.price ?? 0;
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
            <p>Clacular o prazo de entrega</p>

            <form className="flex gap-3">
              <input className="border border-[#c0c0c0] rounded-md p-3" type="text" placeholder="Insira sei CEP" />
              <button className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-700">
                Calcular
              </button>
            </form>
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
