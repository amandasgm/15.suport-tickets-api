// 21. listar os tickets
export function index({ request, response, database }){
  const { status } = request.query // mesma coisa de request.query.status

  // 30. passando os filtros para serem listados com get
  const filters = status ? { status } : null
  
  const tickets = database.select("tickets", filters) 

  return response.end(JSON.stringify(tickets))
}