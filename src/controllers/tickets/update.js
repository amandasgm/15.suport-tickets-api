// 31. criando o controller de atualizar um ticket
export function update({ request, response, database}){
  const { id } = request.params
  const { equipment, description } = request.body

  return response.writeHead(204).end()
}