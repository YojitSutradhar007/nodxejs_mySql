// Entry Point to server
const http = require('http');
const app = require('./sever')

const port = process.env.PORT ||7878;


const server = http.createServer(app);


server.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 