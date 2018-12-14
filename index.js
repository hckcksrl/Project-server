import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import ConnectionOptions from "./database";
import schema from "./schema";
import { cors } from "cors";
import DecodeJwt from "./JwtToken/DecodeToken";

const middlewares = () => {
  server.express.use(jwt);
  server.express.use(cors());
};

const server = new GraphQLServer({
  schema,
  middlewares: middlewares
});

const jwt = async (req, res, next) => {
  const token = req.get("X-JWT");
  if (token) {
    const user = await DecodeJwt(token);
    if (user) {
      req.user = user;
    } else {
      req.user = undefined;
    }
  }
  next();
};

const appOption = {
  port: 4000,
  endpoint: "/graphql",
  playground: "/playground",
  subscriptions: "/subscriptions"
};

const result = () => console.log("Start");
createConnection(ConnectionOptions)
  .then(() => {
    server.start(appOption, result);
  })
  .catch(error => console.log(error));
