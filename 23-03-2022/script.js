// node install
// . tab_key
// .editor
// common js
// require() & import

// to create a local server we require
//import http from 'http';
//import { createServer } from "http";
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Nodee jsssss" + "<h1>Hello node</h1>");
});

server.listen(4242, () => {
  console.log("Server Is Running.");
});
