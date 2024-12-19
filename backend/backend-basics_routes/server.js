import { createServer } from "node:http";

export const server = createServer((request, response) => {
  console.log("request.url: ", request.url);
  console.log("request.method: ", request.method);

  if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.end("Shrimp");
    return;
  } else if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end("Anemonefish");
  } else {
    response.statusCode = 400;
    response.end("Not found");
  }
});
