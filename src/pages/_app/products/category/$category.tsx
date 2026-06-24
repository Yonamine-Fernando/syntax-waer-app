import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductsList } from "../../../../components/ProductsList";
import { getCategoriesByName } from "../../../../services/categoryService";
import { getProductByCategotyId } from "../../../../services/productService";
import { useEffect, useState } from "react";
import type { Product } from "../../../../interfaces/products";

export const Route = createFileRoute("/_app/products/category/$category")({
  loader: async ({ params }) => {
    const category = await getCategoriesByName(params.category);

    if (!category || !category.id) {
      throw notFound();
    }

    return { category };
  },
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos - SyntaxWear" }],
  }),

  notFoundComponent: () => (
    <section className="container pt-44 text-center text-black min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
      <Link to="/products" className="text-accent hover:text-accent-hover underline">
        Voltar para lista de produtos
      </Link>
    </section>
  ),
});

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasmore, setHasMore] = useState(true);

  const { category } = Route.useLoaderData();

  useEffect(() => {
    async function loadInitial() {
      try {
        const response = await getProductByCategotyId(category.id, { page: 1 });
        setProducts(response.data);
        if (response.data.length < response.limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Erro na busca inicial:", error);
      } finally {
        setLoading(false);
      }
    }
    loadInitial();
  }, [category.id]);

  async function loadMore() {
    if (loading || !hasmore) return;
    setLoading(true);

    const nextPage = page + 1;
    try {
      const response = await getProductByCategotyId(category.id, { page: nextPage });
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
    <section className="container pt-40 md:pt-50 pb-10 md:px-10 mb-10 text-black text-center min-h-[73vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-3">Catálogo dos Produtos</h1>
      <h2 className="mb-10">Conforto ideal para suas aventuras do dia-a-dia! </h2>
      {loading && products.length === 0 ? (
        <div className="flex justify-center items-center min-h-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#212a2f]"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center">Nenhum produto encontrado.</p>
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
      <Link className="mt-5 text-accent hover:text-accent-hover underline" to="/products">
        Voltar para lista de produtos
      </Link>
    </section>
  );
}
