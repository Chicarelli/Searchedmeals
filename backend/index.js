const configExpress = require('./config/configExpress');

const server = configExpress();

server.listen(3333, () => {
    console.log('Api online');
})

