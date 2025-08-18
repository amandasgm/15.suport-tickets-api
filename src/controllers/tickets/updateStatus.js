// 35. atualizando um ticket com base na mudança de uma unica propriedade - STATUS
export function updateStatus({ request, response, database }){
  const { id } = request.params
  // 37. solução do problema para que o ticket possa ser fechado
  const { solution } = request.body

  database.update("tickets", id, { status: "closed ", solution})

  return response.writeHead(202).end()
}