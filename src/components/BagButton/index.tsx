import { useContext } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BagContext } from "../../contexts/BagContext";

interface BagButtonProps {
  onClick?: () => void;
}

export const BagButton = ({ onClick }: BagButtonProps) => {
  const { bag } = useContext(BagContext);
  return (
    <button className="cursor-pointer relative" onClick={onClick}>
      <MdOutlineShoppingBag className="text-2xl text-[#9856EF]" />
      {bag.length > 0 && (
        <span className="absolute -right-2 -top-2 bg-error text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {bag.length}
        </span>
      )}
    </button>
  );
};
