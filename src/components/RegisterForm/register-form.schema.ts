import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../utils/cpf-validator";
import { isOver18 } from "../utils/isOver18-validator";

export const registerUserFormSchema = z
  .object({
    nomeCompleto: z
      .string()
      .trim()
      .min(1, "O nome completo obrigatório.")
      .refine((name) => name.split(/\s+/).length >= 2, "Por favor, insira pelo menos nome e sobrenome."),

    email: z.email("Insira um formato de e-mail válido.").toLowerCase(),

    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),

    confirmPassword: z.string(),

    cpf: z
      .string()
      .transform((val) => val.replace(/\D/g, ""))
      .refine((val) => val.length === 11, "O CPF deve conter exatamente 11 dígitos.")
      .refine(isValidCPF, "O CPF informado é inválido."),

    dataNascimento: z.coerce.date().refine(isOver18, "Você deve ter pelo menos 18 anos para se registrar."),

    cellphone: z.string().min(1, "Telefone é obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

export type RegistrationFormInput = z.input<typeof registerUserFormSchema>;
export type RegistrationFormOutput = z.output<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegistrationFormInput, unknown, RegistrationFormOutput>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  };
};
