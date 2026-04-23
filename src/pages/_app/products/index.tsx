import { createFileRoute } from "@tanstack/react-router";
import { ProductsList } from "../../../components/ProductsList";
import { products } from "../../../components/mocks/products";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container pt-40 md:pt-50 pb-10 md:px-10 mb-10 text-black text-center bg-surface">
      <h1 className="text-3xl mb-3">Catálogo dos Produtos</h1>
      <h2 className="mb-10">Conforto ideal para suas aventuras do dia-a-dia! </h2>
      <ProductsList products={products} />
    </div>
  );
}
