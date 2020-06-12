import { ApolloServer, IResolvers, IResolverObject } from 'apollo-server';
import 'graphql-import-node';
import typeDefs from '../gql/schema.gql';
import {
    GQLResolver,
    GQLTodoItem,
    GQLTodoStatus,
    GQLTodoItemTypeResolver,
    GQLTodoOpsTypeResolver,
} from './graphqlTypes';

const todos: GQLTodoItem[] = [{
    title: 'Build a todo graph',
    status: GQLTodoStatus.IN_PROGRESS,
}, {
    title: 'Interact with that graph',
    status: GQLTodoStatus.TODO,
}];

interface TodoHandle {
    idx: number;
}

const TodoItem: GQLTodoItemTypeResolver<TodoHandle> & IResolverObject = {
    status: parent => todos[parent.idx].status,
    title: parent => todos[parent.idx].title,
};

const TodoOps: GQLTodoOpsTypeResolver<TodoHandle> & IResolverObject = {
    setStatus: (parent, { status }) => {
        const todoItem = todos[parent.idx];
        todoItem.status = status;
        return todoItem;
    }
};

const resolvers: GQLResolver & IResolvers = {
    Query: {
        todos: () => todos,
        // todo: (parent, { idx }) => {
        //     if (idx < 0 || idx >= todos.length) throw new TypeError('Index is out of bounds');
        //     return { idx };
        // },
    },
    // TodoItem,
    Mutation: {
        addTodo: (parent, { title }) => {
            const newTodo: GQLTodoItem = {
                title,
                status: GQLTodoStatus.TODO,
            };
            todos.push(newTodo);
            return newTodo;
        },
        todo: (parent, { idx }) => {
            if (idx < 0 || idx >= todos.length) throw new TypeError('Index is out of bounds');
            return { idx };
        }
    },
    TodoOps,
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => console.log(url));