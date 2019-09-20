import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("./api/fakeData.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3020;

server.use(middlewares);
server.use(router);
server.listen(port);
