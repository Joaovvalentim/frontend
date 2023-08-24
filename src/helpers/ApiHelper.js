// Função para realizar uma requisição GET usando fetch e retornar os dados JSON da resposta
export const doGetRequest = path => {
  // Realiza uma requisição GET para o caminho especificado
  return fetch(path)
    .then(response => response.json()); // Converte a resposta em formato JSON e retorna os dados
};
