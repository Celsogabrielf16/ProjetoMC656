import { z } from "zod";

export const bikeSchema = z.object({
  model: z
    .string({ required_error: "O modelo é obrigatório", invalid_type_error: "O modelo deve ser uma string" })
    .min(1, "O modelo deve ter pelo menos 1 caractere"),

  description: z
    .string({ required_error: "A descrição é obrigatória", invalid_type_error: "A descrição deve ser uma string" })
    .min(1, "A descrição deve ter pelo menos 1 caractere"),

  size: z
    .string({ required_error: "O tamanho é obrigatório" })
    .regex(/^\d+$/, "O tamanho deve ser numérico")
    .refine((val) => {
      const num = parseInt(val);
      return num >= 12 && num <= 30;
    }, { message: "O tamanho deve estar entre 12 e 30" }),

  imagePath: z
    .string({ required_error: "A URL da imagem é obrigatória", invalid_type_error: "A URL da imagem deve ser uma string" })
    .url("A URL da imagem deve ser válida"),

  hourlyRate: z
    .number({ invalid_type_error: "A taxa por hora deve ser um número", required_error: "A taxa por hora é obrigatória" })
    .positive("A taxa por hora deve ser positiva"),

  maxUsageTime: z
    .number({ invalid_type_error: "O tempo máximo de uso deve ser um número", required_error: "O tempo máximo de uso é obrigatório" })
    .int("O tempo máximo de uso deve ser um número inteiro")
    .positive("O tempo máximo de uso deve ser positivo"),

  lateFee: z
    .number({ invalid_type_error: "A multa por atraso deve ser um número", required_error: "A multa por atraso é obrigatória" })
    .min(0, "A multa por atraso deve ser pelo menos 0"),
});
