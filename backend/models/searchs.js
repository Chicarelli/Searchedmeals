const connection = require('../infra/conection');

function createSearch(search){
    const sql = 'INSERT INTO searchs SET ?'

    connection.query(sql, search, (erro, resultados) => {
        if(erro) {
            console.log(erro)
        } else {
            console.log(resultados);
        }
    })
}

module.exports = createSearch;