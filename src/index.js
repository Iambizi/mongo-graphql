import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";



const startServer = () =>{
    const app = express();

    const server = new ApolloServer({ 
        typeDefs, resolvers 
    });

    server.applyMiddleware({ app });

    mongoose.connect('mongodb://localhost:27017/test', { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // The `listen` method launches a web server.
    app.listen({ port: 4000 }, () =>
    console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
    );
};

startServer();