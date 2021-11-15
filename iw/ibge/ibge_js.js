const URL_REGIAO = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes'
const SELECT_REGIAO = document.getElementById('regiao');
const URL_ESTADO = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const SELECT_ESTADO = document.getElementById('estado');
const URL_CIDADE = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos'
const SELECT_CIDADE = document.getElementById('cidade');

// Aprender essa estrutura
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
      SELECT_ESTADO.innerHTML += `<option>${cadaEstado.nome}</option>`;
    });
  });

// fetch(URL_CIDADE)
//   .then( (resposta) => resposta.json () )
//   .then( (cidade) => {
//     cidade.forEach((cadaCidade) => {
//       SELECT_CIDADE.innerHTML += `<option>${cadaCidade.nome}</option>`;
//     });
//   });