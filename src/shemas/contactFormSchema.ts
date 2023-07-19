import { z } from "zod";

export const contactFormSchema = z.object({
  username: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(3, "O nome deve conter no mínimo 3 caracteres"),
  email: z
    .string()
    .email({ message: "Formato de e-mail inválido" })
    .nonempty("O email é obrigatório"),
  message: z
    .string()
    .nonempty("A mensagem é obrigatória")
    .min(10, "A mensagem deve conter no mínimo 10 caracteres"),
});

export type TcontactFormSchema = z.infer<typeof contactFormSchema>;
