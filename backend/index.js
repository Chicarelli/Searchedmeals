const configExpress = require("./config/configExpress");
const conexao = require("./infra/conection");
const Table = require("./infra/table");


conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    Table.init(conexao);

    const server = configExpress();

    server.listen(3333, () => {
      console.log("Api online");
    });
  }
});
