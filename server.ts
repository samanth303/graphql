import  express  from "express";
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";


const app = express();
const schema = new ApolloServer ({ typeDefs, resolvers});

// const apolloServer = new ApolloServer({
//     schema,
//     context:({req,res}:any)=>({req,res})
// });
// apolloServer.applyMiddleware({app,cors:false})

schema.listen({ port: 8000 }, () => {
    console.log(`GraphQL server is running at ${8000}`);
    });