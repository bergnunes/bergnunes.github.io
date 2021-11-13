const URL_REGIAO = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes'
const SELECT_REGIAO = document.getElementById('regiao');
const URL_ESTADO = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const SELECT_ESTADO = document.getElementById('estado')

// Aprnder essa estrutura
// fetch()
//   .then()
//   .then();

fetch(URL_REGIAO)
  .then( (resposta) => resposta.json() )
  .then( (regioes) => {
    regioes.forEach((cadaRegiao) => {
      SELECT_REGIAO.innerHTML += `<option>${cadaRegiao.nome}</option>`;
    });
  });

fetch(URL_ESTADO)
  .then( (resposta) => resposta.json() )
  .then( (estados) => {
    estados.forEach((cadaEstado) => {
      SELECT_ESTADO.innerHTML += `<option>${cadaEstado.nome}</option>`
    });
  });
