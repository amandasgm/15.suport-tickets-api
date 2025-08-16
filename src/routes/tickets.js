import { create } from "../controllers/tickets/create.js";

// 7. criando rotas para cada tipo de requisição
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    // proposito do controller é executar alguma coisa quando o metodo for chamado
    // 12. passa o create direto
    controller: create,
  },
]
