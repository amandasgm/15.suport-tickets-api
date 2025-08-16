// Esse middleware pega o corpo da requisição, transforma em JSON e garante que sua resposta sempre seja enviada como JSON.

// 4. exportando uma função assincrona que vai receber a requisição e a resposta
export async function jsonHandler(request, response) {
  const buffers = []

  for await (const chunk of request){
    buffers.push(chunk)
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString()) 
  } catch (error) {
    request.body = null
  }

  response.setHeader("Content-Type", "application/json")
}