class Table {
    init(conexao) {

        this.conexao = conexao;
        this.createSearch();
       
    }

    createSearch(){
        const sql = 'CREATE TABLE IF NOT EXISTS Searchs(id int NOT NULL AUTO_INCREMENT, search varchar(100) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error)
            } else console.log("sucesso");
        });
    }
}

module.exports = new Table;