import { useContext, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { formatCurrency } from "../../helpers/currency-format";
import { BagContext } from "../../contexts/BagContext";

export const ShoppingBag = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const { bag, remove, increment, decrement } = useContext(BagContext);

  console.log("item no na sacola:", bag);

  return (
    <>
      <button className="cursor-pointer" onClick={() => setCartIsOpen(!cartIsOpen)}>
        <MdOutlineShoppingBag className="text-2xl text-[#9856EF]" />
      </button>

      <div
        className={`${cartIsOpen ? "bg-black/60 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <div
          className={`${cartIsOpen ? "translate-x" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-[30%]`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5 ">
            <p className="text-2xl font-bold">Sacola ({bag.length})</p>
            <button className="text-xl font-bold cursor-pointer" onClick={() => setCartIsOpen(!cartIsOpen)}>
              X
            </button>
          </header>
          <ul className=" p-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-3">
            {bag.map((product) => (
              <li className="flex flex-col gap-1 px-6 " key={product.id}>
                <button className="self-end text-xs cursor-pointer" onClick={() => remove(product.id)}>
                  X
                </button>

                <div className="flex gap-4">
                  <img className="w-16 h-16" src={product.image} alt={product.name} />
                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-sm">{product.name}</p>
                    <p className="mb-1 text-sm">Quantidade: {product.quantity}</p>
                    <p>
                      <span className="">{formatCurrency(product.price)}</span> à vista
                    </p>
                    <div className="border flex gap-6 px-3 py-1">
                      <button className="cursor-pointer" onClick={() => decrement(product)}>
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button className="cursor-pointer" onClick={() => increment(product)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <footer className=" absolute bottom-0 w-full h-25 p-3">
            <button className="w-full h-full bg-black text-white rounded-sm cursor-pointer hover:bg-gray-800">
              Fechar pedido
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
