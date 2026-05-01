import { z } from "zod";

const onlyDigits = (value: string) => value.replace(/\D/g, "");

export const cepSchema = z.object({
  cep: z
    .string()
    .min(1, "CEP é obrigatório")
    .transform(onlyDigits)
    .refine(
      (value) => value.length === 8,
      {
        message: "CEP inválido. Deve conter 8 dígitos",
      },
    ),
});

export type CepFormData = z.infer<typeof cepSchema>;
