"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_1 = require("apollo-server");
var typeDefs_1 = __importDefault(require("./typeDefs"));
var resolvers_1 = __importDefault(require("./resolvers"));
var app = (0, express_1.default)();
var schema = new apollo_server_1.ApolloServer({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
// const apolloServer = new ApolloServer({
//     schema,
//     context:({req,res}:any)=>({req,res})
// });
// apolloServer.applyMiddleware({app,cors:false})
schema.listen({ port: 8000 }, function () {
    console.log("GraphQL server is running at " + 8000);
});
