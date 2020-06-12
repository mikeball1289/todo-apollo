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

type Undefined<T> = {
    [K in keyof T]: undefined;
}

interface TodoItem {
    title: string;
    status: GQLTodoStatus;
}

// Typescript requires the fields in the alternate interface
// to exist in this one, but be undefined, in order to do type flow analysis properly
interface TodoItemHandle extends Undefined<TodoItem> {
    idx: number;
}

type TodoItemResolverType = TodoItem | TodoItemHandle;

const todos: TodoItem[] = [{
    title: 'Build a todo graph',
    status: GQLTodoStatus.IN_PROGRESS,
}, {
    title: 'Interact with that graph',
    status: GQLTodoStatus.TODO,
}];

const TodoItem: GQLTodoItemTypeResolver<TodoItemResolverType> & IResolverObject = {
    status: parent => parent.status ?? todos[parent.idx].status,
    title: parent => parent.title ?? todos[parent.idx].title,
};

const TodoOps: GQLTodoOpsTypeResolver<TodoItemHandle> & IResolverObject = {
    setStatus: ({ idx }, { status }) => {
        todos[idx].status = status;
        return { idx };
    }
};

const resolvers: GQLResolver & IResolvers = {
    Query: {
        todos: () => todos,
        todo: (parent, { idx }) => {
            if (idx < 0 || idx >= todos.length) throw new TypeError('Index is out of bounds');
            return { idx };
        },
    },
    TodoItem,
    Mutation: {
        addTodo: (parent, { title }) => {
            const newTodo: TodoItem = {
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