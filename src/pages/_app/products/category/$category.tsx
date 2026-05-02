import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductsList } from "../../../../components/ProductsList";
import { products } from "../../../../components/mocks/products";

export const Route = createFileRoute("/_app/products/category/$category")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos - SyntaxWear" }],
  }),
});

function RouteComponent() {
  const { category } = Route.useParams();

  const filteredProducts = products.filter(
    (products) => (products.category?.name ?? "").toLowerCase() === category.toLowerCase(),
  );

  return (
    <section className="container pt-40 md:pt-50 pb-10 md:px-10 mb-10 text-black text-center min-h-[73vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-3">Catálogo dos Produtos</h1>
      <h2 className="mb-10">Conforto ideal para suas aventuras do dia-a-dia! </h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center">Nenhum produto encontrado.</p>
      ) : (
        <ProductsList products={filteredProducts} />
      )}
      <Link className="text-accent hover:text-accent-hover underline" to="/products">
        Voltar para lista de produtos
      </Link>
    </section>
  );
}
