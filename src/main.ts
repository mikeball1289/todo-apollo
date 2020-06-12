import { ApolloServer, IResolvers, IResolverObject } from 'apollo-server';
import 'graphql-import-node';
import typeDefs from '../gql/schema.gql';
import {
    GQLResolver,
    QueryToNumberResolver,
    GQLNumberTypeResolver,
} from './graphqlTypes';

interface NumberValue {
    value: number;
}

const number: QueryToNumberResolver<undefined, NumberValue> = (parent, { n }) => ({
    value: n
});

const Number: GQLNumberTypeResolver<NumberValue> & IResolverObject = {
    next: parent => ({ value: parent.value + 1 }),
    prev: parent => ({ value: parent.value - 1 }),
};

const resolvers: GQLResolver & IResolvers = {
    Query: {
        helloWorld: () => 'hello world',
        number
    },
    Number
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => console.log(url));