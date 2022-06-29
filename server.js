const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
    static: "./build"
})

const port = proces.env.PORT;
server.use(middlewares);
server.use(jsonServer);
server.use(router);
server.listen(port,()=>{console.log("Server running on",port)});