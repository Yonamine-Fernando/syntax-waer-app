import { createFileRoute } from "@tanstack/react-router";
import { ProductsList } from "../../../components/ProductsList";
import { useEffect } from "react";
import { getProducts } from "../../../services/productService";
import { useState } from "react";
import type { Product } from "../../../interfaces/products";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos - SyntaxWear" }],
  }),
});

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasmore, setHasMore] = useState(true);

  useEffect(() => {
    async function loadInitial() {
      try {
        const response = await getProducts({ page: 1 });
        setProducts(response.data);
      } catch (error) {
        console.error("Erro na busca inicial:", error);
      } finally {
        setLoading(false);
      }
    }
    loadInitial();
  }, []);

  async function loadMore() {
    if (loading || !hasmore) return;
    setLoading(true);

    const nextPage = page + 1;
    const response = await getProducts({ page: nextPage });
    try {
      setProducts((prev) => [...prev, ...response.data]);
      if (response.data.length < response.limit) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Erro ao carregar mais produtos:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container pt-40 md:pt-50 pb-10 md:px-10 mb-10 text-black text-center flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-3">Catálogo dos Produtos</h1>
      <h2 className="mb-10">Conforto ideal para suas aventuras do dia-a-dia! </h2>

      {loading && products.length === 0 ? (
        <div className="flex justify-center items-center min-h-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#212a2f]"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center">Nenhum produto encontrado para essa categoria</p>
      ) : (
        <>
          <ProductsList products={products} />
          {hasmore && (
            <button
              className="bg-[#212a2f] py-3.5 px-7 rounded-xl cursor-pointer mx-auto text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Carregar mais"}
            </button>
          )}
        </>
      )}
    </section>
  );
}
