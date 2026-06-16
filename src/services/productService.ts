import type { Product } from "../interfaces/products";

const API_BASE_URL = "http://localhost:3000";
const DEAULT_LIMIT = 3;

interface GetProductsParams {
  page: number;
  limit?: number;
}

interface ProductResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}

export async function getProducts({ page, limit = DEAULT_LIMIT }: GetProductsParams): Promise<ProductResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  const url = `${API_BASE_URL}/products?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) throw error;
    throw new Error("Erro desconecido ao buscar produtos.");
  }
}
