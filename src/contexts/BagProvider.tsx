import { useEffect, useState } from "react";
import type { Product } from "../interfaces/products";
import { BagContext } from "./BagContext";

interface BagProviderProps {
  children: React.ReactNode;
}

export interface ProductBag extends Product {
  quantity: number;
}

const localStorageKey = "@SyntaxWear:cart";

export const BagProvider = ({ children }: BagProviderProps) => {
  const [bag, setBag] = useState<ProductBag[]>(() => {
    try {
      const bagFormLocalStorage = localStorage.getItem(localStorageKey);
      return bagFormLocalStorage ? JSON.parse(bagFormLocalStorage) : [];
    } catch (error) {
      console.error("Erro ao ler a sacola", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(bag));
  }, [bag]);

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
    updateProductQuantity(product, product.quantity + 1);
  }

  function decrement(product: ProductBag): void {
    updateProductQuantity(product, product.quantity - 1);
  }

  function updateProductQuantity(product: ProductBag, newQuantity: number): void {
    if (newQuantity <= 0) return;
    const productExistsInBag = bag.find((itemInBag) => itemInBag.id === product.id);

    if (!productExistsInBag) return;

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
