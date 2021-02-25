module.exports = server => {
    server.post('/searchs', (req, res) => { 
        console.log(req.body);
        res.send("Tudo certo")
    });
}