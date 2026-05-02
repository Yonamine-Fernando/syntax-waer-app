import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formatCurrency } from "../../helpers/currency-format";
import type { Address } from "../../interfaces/andress";
import { cepSchema, type CepFormData } from "./cep.schema";

const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  "Centro-Oeste": 24.9,
  Sudeste: 14.9,
  Sul: 19.9,
};

export const CEPForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CepFormData>({
    resolver: zodResolver(cepSchema),
    mode: "onTouched",
  });
  const [address, setAddress] = useState<Address | null>(null);

  const onSubmit = async (values: CepFormData) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${values.cep}/json/`);

      if (!response.ok) {
        throw new Error("Erro na rede ao buscar o CEP");
      }

      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado.");
        return;
      }

      const shippingCost = SHIPPING_BY_REGION[data.regiao];

      console.log(shippingCost);
      console.log(data.regiao);

      setAddress({ ...data, shippingCost: shippingCost });

      console.log("Endereço encontrado:", data);
      // Aqui você pode preencher outros campos ou salvar no estado
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      alert("Ocorreu um erro ao buscar o CEP. Tente novamente.");
    }
  };

  return (
    <>
      <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <input
            className={`border border-[#c0c0c0] rounded-md p-3 transition-colors ${
              errors.cep ? "border-red-500" : "focus:border-black"
            }`}
            type="text"
            placeholder="00000-000"
            {...register("cep")}
            maxLength={9}
          />
          {errors.cep && <span className="text-red-500 text-sm mt-1">{errors.cep.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Carregando..." : "Calcular"}
        </button>
      </form>
      {address && (
        <div className="mt-4">
          <p>
            <strong>Regiao:</strong>
            {address.regiao}
          </p>
          <p>
            <strong>Custo de entrega:</strong>
            {formatCurrency(address.shippingCost)}
          </p>
        </div>
      )}
    </>
  );
};
