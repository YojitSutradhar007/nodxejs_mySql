// Entry Point to server
const http = require('http');
const app = require('./sever')
const sqDb = require('./util/sequelize')
const port = process.env.PORT || 7878;
const server = http.createServer(app);

sqDb.sync().then(() => {
    server.listen(port, () => { 
        console.log(`Server running on port ${port}`);
    });
})
