// 8. responsavel por juntar todas as rotas que estao em arquivos diferentes
import { tickets } from "./tickets.js";
// 24.1 importando o metodo de regex para sobrescrever a rota
import { parseRoutePath } from "../utils/parseRoutePath.js";

// 24. .map em diante
export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path)
}))