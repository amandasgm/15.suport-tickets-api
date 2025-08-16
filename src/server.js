// 1. importa o http do node
import http from "node:http"
// 5. importa o jsonHandler
import { jsonHandler } from "./middleware/jsonHandler.js"

// 2. separando a função em um listener
async function listener(request, response) {
  // 6. chama a função e a torna async ja que vai ter um tempo de processamento para obter a requisição e passar a resposta
  await jsonHandler(request, response)
  console.log(request.body)
}

// 3. criando um servidor para iniciar uma API na porta 3333
http.createServer(listener).listen(3333)