// 39. controller para remover um ticket
export function remove({ request, response, database}){
  const { id } = request.params

  // 42. adiciona do database o metodo delete
  database.delete("tickets", id)

  return response.end("Item removido com sucesso")
}