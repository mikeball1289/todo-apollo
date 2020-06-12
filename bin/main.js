"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
require("graphql-import-node");
var schema_gql_1 = __importDefault(require("../gql/schema.gql"));
var resolvers = {
    Query: {
        helloWorld: function () { return 'hello world'; }
    }
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: schema_gql_1.default,
    resolvers: resolvers,
});
server.listen().then(function (_a) {
    var url = _a.url;
    return console.log(url);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTZDO0FBQzdDLCtCQUE2QjtBQUM3QixpRUFBeUM7QUFFekMsSUFBTSxTQUFTLEdBQUc7SUFDZCxLQUFLLEVBQUU7UUFDSCxVQUFVLEVBQUUsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhO0tBQ2xDO0NBQ0osQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFHLElBQUksNEJBQVksQ0FBQztJQUM1QixRQUFRLHNCQUFBO0lBQ1IsU0FBUyxXQUFBO0NBQ1osQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU87UUFBTCxHQUFHLFNBQUE7SUFBTyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQWhCLENBQWdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXInO1xyXG5pbXBvcnQgJ2dyYXBocWwtaW1wb3J0LW5vZGUnO1xyXG5pbXBvcnQgdHlwZURlZnMgZnJvbSAnLi4vZ3FsL3NjaGVtYS5ncWwnO1xyXG5cclxuY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gICAgUXVlcnk6IHtcclxuICAgICAgICBoZWxsb1dvcmxkOiAoKSA9PiAnaGVsbG8gd29ybGQnXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcclxuICAgIHR5cGVEZWZzLFxyXG4gICAgcmVzb2x2ZXJzLFxyXG59KTtcclxuXHJcbnNlcnZlci5saXN0ZW4oKS50aGVuKCh7IHVybCB9KSA9PiBjb25zb2xlLmxvZyh1cmwpKTsiXX0=