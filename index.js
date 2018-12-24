import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import ConnectionOptions from "./database";
import schema from "./schema";
import cors from "cors";
import DecodeJwt from "./JwtToken/DecodeToken";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config({ path: "./bin/.env" });

const server = new GraphQLServer({
  schema,
  context: req => {
    const { connection: { context = null } = {} } = req;
    return {
      req: req.request
    };
  }
});

const middleware = () => {
  server.express.use(jwt);
  server.express.use(bodyParser.json());
  server.express.use(bodyParser.urlencoded({ extended: true }));
  server.express.use(cors());
};

const jwt = async (req, res, next) => {
  const token = req.get("authorization");
  if (token != undefined) {
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
  port: process.env.PORT,
  endpoint: "/graphql",
  playground: "/playground",
  subscriptions: "/subscriptions"
};

const result = () => console.log("Start");
createConnection(ConnectionOptions)
  .then(() => {
    middleware();
    server.start(appOption, result);
  })
  .catch(error => console.log(error));
