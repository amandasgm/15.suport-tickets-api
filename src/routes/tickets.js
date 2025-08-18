import { create } from "../controllers/tickets/create.js";
// 22. importando o controller do metodo get e atualizando a linha 19
import { index } from "../controllers/tickets/index.js";
// 32. importando o controller do metodo put e atualizando a linha 27
import { update } from "../controllers/tickets/update.js"
// 36. importando o controller do metodo patch e atualizando o controller
import { updateStatus } from "../controllers/tickets/updateStatus.js"
// 40. importando o remove
import { remove } from "../controllers/tickets/remove.js"

// 7. criando rotas para cada tipo de requisição
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    // proposito do controller é executar alguma coisa quando o metodo for chamado
    // 12. passa o create direto
    controller: create,
  },

  // 20. criando outros metodos
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },

  // 31. criando metodo PUT
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },

  // 34. criando metodo patch
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatus,
  },

  //38. criando metodo de delete
  {
    method: "DELETE",
    path: "/tickets/:id",
    controller: remove,
  },
]
