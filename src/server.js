// 1. importa o http do node
import http from "node:http"

// 2. separando a função em um listener
function listener(request, response) {
  
}

// 3. criando um servidor para iniciar uma API na porta 3333
http.createServer(listener).listen(3333)