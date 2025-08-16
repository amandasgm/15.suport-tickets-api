// 7. criando rotas para cada tipo de requisição
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (request, response) => {
      response.end("Criando com sucesso!")
    }
  }
]
