// 9. Criando middleware para lidar com as rotas
import { routes } from "../routes/index.js";
// 16. importando o banco de dados e chamando ele (linha 14)
import { Database } from "../database/database.js";
// 28. importando a função de tratamento da query 
import { extractQueryParams } from "../utils/extractQueryParams.js";


const database = new Database()

export function routeHandler(request, response){
  const route = routes.find((route) => {
    // 25. route.path.test para usar a expressao regular para testar se a url bate
    return route.method === request.method && route.path.test(request.url)
  })

  if(route){
    const routeParams = request.url.match(route.path) // 26. obtendo parametros da rota

    const { query } = routeParams.groups
    request.query = query ? extractQueryParams(query) : {} // 28.1 { status: 'closed' }

    return route.controller({ request, response, database })
  }

  return response.writeHead(404).end()
}