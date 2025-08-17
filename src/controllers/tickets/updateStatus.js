// 35. atualizando um ticket com base na mudança de uma unica propriedade - STATUS
export function updateStatus({ request, response, database }){
  const { id } = request.params
  database.update("tickets", id, { status: "closed "})
  
  return response.writeHead(202).end()
}