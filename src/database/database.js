// 15. armazenando arquivos de forma permanente
import fs from "node:fs/promises"

// onde é o endereço que queremos salvar nosso banco de dados
const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
  #database = {}
  // utilizado toda vez que a classe é instanciada
  constructor(){
    fs.readFile(DATABASE_PATH, "utf8") // vai ler o arquivo
      .then((data) => {
        this.#database = JSON.parse(data)
      }) // se encontrar dado, vai transformar de para json e atualizar o objeto #database
      .catch(() => {
        this.#persist()
      }) // se nao encontrar nada vai chamar o persist
  }

  #persist(){
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }

  // 17. inserindo o ticket
  insert(table, data) {
    // se a tabela já existe (é um array):
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } 
    // Se a tabela não existe ainda:
    else {
      this.#database[table] = [data]
    }

    this.#persist()
  }

  // 19. criando metodo de selecionar // 29. passando o filters como paramentro para filtrar
  select(table, filters){
    let data = this.#database[table] ?? []

    // 29. retornando o dado filtrado
    if(filters){
      data = data.filter((row) => {
        return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase( ))
        })

        return row
      })
    }

    return data
  }

}