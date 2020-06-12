"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
require("graphql-import-node");
var schema_gql_1 = __importDefault(require("../gql/schema.gql"));
var todos = [{
        title: 'Build a todo graph',
        status: "IN_PROGRESS" /* IN_PROGRESS */,
    }, {
        title: 'Interact with that graph',
        status: "TODO" /* TODO */,
    }];
var TodoItem = {
    status: function (parent) { return todos[parent.idx].status; },
    title: function (parent) { return todos[parent.idx].title; },
};
var resolvers = {
    Query: {
        todos: function () { return todos; },
    },
    // TodoItem,
    Mutation: {
        addTodo: function (parent, _a) {
            var title = _a.title;
            var newTodo = {
                title: title,
                status: "TODO" /* TODO */,
            };
            todos.push(newTodo);
            return newTodo;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTBFO0FBQzFFLCtCQUE2QjtBQUM3QixpRUFBeUM7QUFRekMsSUFBTSxLQUFLLEdBQWtCLENBQUM7UUFDMUIsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixNQUFNLGlDQUEyQjtLQUNwQyxFQUFFO1FBQ0MsS0FBSyxFQUFFLDBCQUEwQjtRQUNqQyxNQUFNLG1CQUFvQjtLQUM3QixDQUFDLENBQUM7QUFNSCxJQUFNLFFBQVEsR0FBMEQ7SUFDcEUsTUFBTSxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQXhCLENBQXdCO0lBQzFDLEtBQUssRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUF2QixDQUF1QjtDQUMzQyxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQTZCO0lBQ3hDLEtBQUssRUFBRTtRQUNILEtBQUssRUFBRSxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUs7S0FLckI7SUFDRCxZQUFZO0lBQ1osUUFBUSxFQUFFO1FBQ04sT0FBTyxFQUFFLFVBQUMsTUFBTSxFQUFFLEVBQVM7Z0JBQVAsS0FBSyxXQUFBO1lBQ3JCLElBQU0sT0FBTyxHQUFnQjtnQkFDekIsS0FBSyxPQUFBO2dCQUNMLE1BQU0sbUJBQW9CO2FBQzdCLENBQUM7WUFDRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7S0FDSjtDQUNKLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBRyxJQUFJLDRCQUFZLENBQUM7SUFDNUIsUUFBUSxzQkFBQTtJQUNSLFNBQVMsV0FBQTtDQUNaLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFPO1FBQUwsR0FBRyxTQUFBO0lBQU8sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUFoQixDQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIElSZXNvbHZlcnMsIElSZXNvbHZlck9iamVjdCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXInO1xyXG5pbXBvcnQgJ2dyYXBocWwtaW1wb3J0LW5vZGUnO1xyXG5pbXBvcnQgdHlwZURlZnMgZnJvbSAnLi4vZ3FsL3NjaGVtYS5ncWwnO1xyXG5pbXBvcnQge1xyXG4gICAgR1FMUmVzb2x2ZXIsXHJcbiAgICBHUUxUb2RvSXRlbSxcclxuICAgIEdRTFRvZG9TdGF0dXMsXHJcbiAgICBHUUxUb2RvSXRlbVR5cGVSZXNvbHZlclxyXG59IGZyb20gJy4vZ3JhcGhxbFR5cGVzJztcclxuXHJcbmNvbnN0IHRvZG9zOiBHUUxUb2RvSXRlbVtdID0gW3tcclxuICAgIHRpdGxlOiAnQnVpbGQgYSB0b2RvIGdyYXBoJyxcclxuICAgIHN0YXR1czogR1FMVG9kb1N0YXR1cy5JTl9QUk9HUkVTUyxcclxufSwge1xyXG4gICAgdGl0bGU6ICdJbnRlcmFjdCB3aXRoIHRoYXQgZ3JhcGgnLFxyXG4gICAgc3RhdHVzOiBHUUxUb2RvU3RhdHVzLlRPRE8sXHJcbn1dO1xyXG5cclxuaW50ZXJmYWNlIFRvZG9IYW5kbGUge1xyXG4gICAgaWR4OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFRvZG9JdGVtOiBHUUxUb2RvSXRlbVR5cGVSZXNvbHZlcjxUb2RvSGFuZGxlPiAmIElSZXNvbHZlck9iamVjdCA9IHtcclxuICAgIHN0YXR1czogcGFyZW50ID0+IHRvZG9zW3BhcmVudC5pZHhdLnN0YXR1cyxcclxuICAgIHRpdGxlOiBwYXJlbnQgPT4gdG9kb3NbcGFyZW50LmlkeF0udGl0bGUsXHJcbn07XHJcblxyXG5jb25zdCByZXNvbHZlcnM6IEdRTFJlc29sdmVyICYgSVJlc29sdmVycyA9IHtcclxuICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgdG9kb3M6ICgpID0+IHRvZG9zLFxyXG4gICAgICAgIC8vIHRvZG86IChwYXJlbnQsIHsgaWR4IH0pID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGlkeCA8IDAgfHwgaWR4ID49IHRvZG9zLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5kZXggaXMgb3V0IG9mIGJvdW5kcycpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4geyBpZHggfTtcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIC8vIFRvZG9JdGVtLFxyXG4gICAgTXV0YXRpb246IHtcclxuICAgICAgICBhZGRUb2RvOiAocGFyZW50LCB7IHRpdGxlIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VG9kbzogR1FMVG9kb0l0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogR1FMVG9kb1N0YXR1cy5UT0RPLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0b2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3VG9kbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcclxuICAgIHR5cGVEZWZzLFxyXG4gICAgcmVzb2x2ZXJzLFxyXG59KTtcclxuXHJcbnNlcnZlci5saXN0ZW4oKS50aGVuKCh7IHVybCB9KSA9PiBjb25zb2xlLmxvZyh1cmwpKTsiXX0=