// 11. criando um controller que vai executar uma função especifica quando o metodo POST for chamado
export function create({ request, response }){
  return response.end("Criando com sucesso!")
}