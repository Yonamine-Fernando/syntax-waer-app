import { useState } from "react";
import type { Product } from "../interfaces/products";
import { BagContext } from "./BagContext";

interface BagProviderProps {
  children: React.ReactNode;
}

export interface ProductBag extends Product {
  quantity: number;
}

export const BagProvider = ({ children }: BagProviderProps) => {
  const [bag, setBag] = useState<ProductBag[]>([]);

  function add(product: Product): void {
    const productExistsIntoBag = bag.find((itemInBag) => itemInBag.id === product.id);

    let newBag;

    if (productExistsIntoBag) {
      newBag = bag.map((itemInBag) =>
        itemInBag.id === product.id ? { ...itemInBag, quantity: itemInBag.quantity + 1 } : itemInBag,
      );
    } else {
      newBag = [...bag, { ...product, quantity: 1 }];
    }

    setBag(newBag);
  }

  function remove(productId: number): void {
    setBag(bag.filter((itemInCart) => itemInCart.id !== productId));
  }

  function increment(product: ProductBag): void {
    updateProductQuantinty(product, product.quantity + 1);
  }

  function decrement(product: ProductBag): void {
    updateProductQuantinty(product, product.quantity - 1);
  }

  function updateProductQuantinty(product: ProductBag, newQuantity: number): void {
    if (newQuantity <= 0) return;
    const productExistInBag = bag.find((itemInBag) => itemInBag.id === product.id);

    if (!productExistInBag) return;

    const newBag = bag.map((itemInBag) =>
      itemInBag.id === product.id ? { ...itemInBag, quantity: newQuantity } : itemInBag,
    );

    setBag(newBag);
  }

  return (
    <BagContext.Provider
      value={{
        bag,
        add,
        remove,
        increment,
        decrement,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};
