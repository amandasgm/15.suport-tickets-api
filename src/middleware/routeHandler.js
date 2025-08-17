// 9. Criando middleware para lidar com as rotas
import { routes } from "../routes/index.js";
// 16. importando o banco de dados e chamando ele (linha 14)
import { Database } from "../database/database.js";

const database = new Database()

export function routeHandler(request, response){
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url
  })

  if(route){
    return route.controller({ request, response, database })
  }

  return response.writeHead(404).end()
}