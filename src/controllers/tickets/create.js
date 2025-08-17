// 11. criando um controller que vai executar uma função especifica quando o metodo POST for chamado
// 14. criando o id unico para cada ticket (UUID - comum em banco de dados)
import { randomUUID } from "node:crypto"

// 18. traz o database como argumento
export function create({ request, response, database }){
  // 13. criando o objeto de um ticket
  const { equipment, description, user_name } = request.body 

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date()
  }

  // 18.1 insere no objeto
  database.insert("tickets", ticket)

  // 18.2 adiciona o writeHead(201)
  return response.writeHead(201).end(JSON.stringify(ticket))
}