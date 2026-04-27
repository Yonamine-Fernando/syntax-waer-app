import { createContext } from "react";
import type { ProductBag } from "./BagPrivider";
import type { Product } from "../interfaces/products";

interface BagContextType {
  bag: ProductBag[];
  add: (product: Product) => void;
  remove: (productId: number) => void;
  increment: (product: ProductBag) => void;
  decrement: (product: ProductBag) => void;
}

export const BagContext = createContext({} as BagContextType);
