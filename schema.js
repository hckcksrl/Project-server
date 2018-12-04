import { buildSchema } from "graphql";

const LogeSchema = buildSchema(`
    type Query{
        User(email:String! , pw:String! ) : String
    }
    type Mutation{
        regist(email:String! , pw:String! , name : String! , phone : String!) : String
        editInfo(email:String! , pw:String! , name : String! , phone : String!) : String
        User(email:String! , pw:String! ) : String
    }
    type User{
        id : Int!
        email : String!
        name : String!
    }

`);
