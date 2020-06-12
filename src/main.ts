import { ApolloServer } from 'apollo-server';
import 'graphql-import-node';
import typeDefs from '../gql/schema.gql';

const resolvers = {
    Query: {
        helloWorld: () => 'hello world'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => console.log(url));