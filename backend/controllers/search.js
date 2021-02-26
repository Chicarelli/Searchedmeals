const search = require('../models/searchs');
const cors = require('cors');

module.exports = server => {
    server.post('/searchs', cors(), (req, res) => { 
        const searched = req.body;
        search(searched);

        res.send("Tudo certo")
    });
}