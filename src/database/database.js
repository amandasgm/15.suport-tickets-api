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

}