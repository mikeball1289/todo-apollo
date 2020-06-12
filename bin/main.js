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
    status: function (parent) { var _a; return (_a = parent.status) !== null && _a !== void 0 ? _a : todos[parent.idx].status; },
    title: function (parent) { var _a; return (_a = parent.title) !== null && _a !== void 0 ? _a : todos[parent.idx].title; },
};
var TodoOps = {
    setStatus: function (_a, _b) {
        var idx = _a.idx;
        var status = _b.status;
        todos[idx].status = status;
        return { idx: idx };
    }
};
var resolvers = {
    Query: {
        todos: function () { return todos; },
        todo: function (parent, _a) {
            var idx = _a.idx;
            if (idx < 0 || idx >= todos.length)
                throw new TypeError('Index is out of bounds');
            return { idx: idx };
        },
    },
    TodoItem: TodoItem,
    Mutation: {
        addTodo: function (parent, _a) {
            var title = _a.title;
            var newTodo = {
                title: title,
                status: "TODO" /* TODO */,
            };
            todos.push(newTodo);
            return newTodo;
        },
        todo: function (parent, _a) {
            var idx = _a.idx;
            if (idx < 0 || idx >= todos.length)
                throw new TypeError('Index is out of bounds');
            return { idx: idx };
        }
    },
    TodoOps: TodoOps,
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: schema_gql_1.default,
    resolvers: resolvers,
});
server.listen().then(function (_a) {
    var url = _a.url;
    return console.log(url);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTBFO0FBQzFFLCtCQUE2QjtBQUM3QixpRUFBeUM7QUF3QnpDLElBQU0sS0FBSyxHQUFlLENBQUM7UUFDdkIsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixNQUFNLGlDQUEyQjtLQUNwQyxFQUFFO1FBQ0MsS0FBSyxFQUFFLDBCQUEwQjtRQUNqQyxNQUFNLG1CQUFvQjtLQUM3QixDQUFDLENBQUM7QUFJSCxJQUFNLFFBQVEsR0FBNEQ7SUFDdEUsTUFBTSxFQUFFLFVBQUEsTUFBTSx5QkFBSSxNQUFNLENBQUMsTUFBTSxtQ0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBQTtJQUMzRCxLQUFLLEVBQUUsVUFBQSxNQUFNLHlCQUFJLE1BQU0sQ0FBQyxLQUFLLG1DQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFBO0NBQzNELENBQUM7QUFFRixJQUFNLE9BQU8sR0FBNkQ7SUFDdEUsU0FBUyxFQUFFLFVBQUMsRUFBTyxFQUFFLEVBQVU7WUFBakIsR0FBRyxTQUFBO1lBQU0sTUFBTSxZQUFBO1FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDSixDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQTZCO0lBQ3hDLEtBQUssRUFBRTtRQUNILEtBQUssRUFBRSxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUs7UUFDbEIsSUFBSSxFQUFFLFVBQUMsTUFBTSxFQUFFLEVBQU87Z0JBQUwsR0FBRyxTQUFBO1lBQ2hCLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU07Z0JBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2xGLE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDO1FBQ25CLENBQUM7S0FDSjtJQUNELFFBQVEsVUFBQTtJQUNSLFFBQVEsRUFBRTtRQUNOLE9BQU8sRUFBRSxVQUFDLE1BQU0sRUFBRSxFQUFTO2dCQUFQLEtBQUssV0FBQTtZQUNyQixJQUFNLE9BQU8sR0FBYTtnQkFDdEIsS0FBSyxPQUFBO2dCQUNMLE1BQU0sbUJBQW9CO2FBQzdCLENBQUM7WUFDRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLEVBQUUsVUFBQyxNQUFNLEVBQUUsRUFBTztnQkFBTCxHQUFHLFNBQUE7WUFDaEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTTtnQkFBRSxNQUFNLElBQUksU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbEYsT0FBTyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUNKO0lBQ0QsT0FBTyxTQUFBO0NBQ1YsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFHLElBQUksNEJBQVksQ0FBQztJQUM1QixRQUFRLHNCQUFBO0lBQ1IsU0FBUyxXQUFBO0NBQ1osQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU87UUFBTCxHQUFHLFNBQUE7SUFBTyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQWhCLENBQWdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciwgSVJlc29sdmVycywgSVJlc29sdmVyT2JqZWN0IH0gZnJvbSAnYXBvbGxvLXNlcnZlcic7XHJcbmltcG9ydCAnZ3JhcGhxbC1pbXBvcnQtbm9kZSc7XHJcbmltcG9ydCB0eXBlRGVmcyBmcm9tICcuLi9ncWwvc2NoZW1hLmdxbCc7XHJcbmltcG9ydCB7XHJcbiAgICBHUUxSZXNvbHZlcixcclxuICAgIEdRTFRvZG9JdGVtLFxyXG4gICAgR1FMVG9kb1N0YXR1cyxcclxuICAgIEdRTFRvZG9JdGVtVHlwZVJlc29sdmVyLFxyXG4gICAgR1FMVG9kb09wc1R5cGVSZXNvbHZlcixcclxufSBmcm9tICcuL2dyYXBocWxUeXBlcyc7XHJcblxyXG50eXBlIFVuZGVmaW5lZDxUPiA9IHtcclxuICAgIFtLIGluIGtleW9mIFRdOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUb2RvSXRlbSB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBHUUxUb2RvU3RhdHVzO1xyXG59XHJcblxyXG4vLyBUeXBlc2NyaXB0IHJlcXVpcmVzIHRoZSBmaWVsZHMgaW4gdGhlIGFsdGVybmF0ZSBpbnRlcmZhY2VcclxuLy8gdG8gZXhpc3QgaW4gdGhpcyBvbmUsIGJ1dCBiZSB1bmRlZmluZWQsIGluIG9yZGVyIHRvIGRvIHR5cGUgZmxvdyBhbmFseXNpcyBwcm9wZXJseVxyXG5pbnRlcmZhY2UgVG9kb0l0ZW1IYW5kbGUgZXh0ZW5kcyBVbmRlZmluZWQ8VG9kb0l0ZW0+IHtcclxuICAgIGlkeDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCB0b2RvczogVG9kb0l0ZW1bXSA9IFt7XHJcbiAgICB0aXRsZTogJ0J1aWxkIGEgdG9kbyBncmFwaCcsXHJcbiAgICBzdGF0dXM6IEdRTFRvZG9TdGF0dXMuSU5fUFJPR1JFU1MsXHJcbn0sIHtcclxuICAgIHRpdGxlOiAnSW50ZXJhY3Qgd2l0aCB0aGF0IGdyYXBoJyxcclxuICAgIHN0YXR1czogR1FMVG9kb1N0YXR1cy5UT0RPLFxyXG59XTtcclxuXHJcbnR5cGUgVG9kb0l0ZW1UeXBlID0gVG9kb0l0ZW0gfCBUb2RvSXRlbUhhbmRsZTtcclxuXHJcbmNvbnN0IFRvZG9JdGVtOiBHUUxUb2RvSXRlbVR5cGVSZXNvbHZlcjxUb2RvSXRlbVR5cGU+ICYgSVJlc29sdmVyT2JqZWN0ID0ge1xyXG4gICAgc3RhdHVzOiBwYXJlbnQgPT4gcGFyZW50LnN0YXR1cyA/PyB0b2Rvc1twYXJlbnQuaWR4XS5zdGF0dXMsXHJcbiAgICB0aXRsZTogcGFyZW50ID0+IHBhcmVudC50aXRsZSA/PyB0b2Rvc1twYXJlbnQuaWR4XS50aXRsZSxcclxufTtcclxuXHJcbmNvbnN0IFRvZG9PcHM6IEdRTFRvZG9PcHNUeXBlUmVzb2x2ZXI8VG9kb0l0ZW1IYW5kbGU+ICYgSVJlc29sdmVyT2JqZWN0ID0ge1xyXG4gICAgc2V0U3RhdHVzOiAoeyBpZHggfSwgeyBzdGF0dXMgfSkgPT4ge1xyXG4gICAgICAgIHRvZG9zW2lkeF0uc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHJldHVybiB7IGlkeCB9O1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZXJzOiBHUUxSZXNvbHZlciAmIElSZXNvbHZlcnMgPSB7XHJcbiAgICBRdWVyeToge1xyXG4gICAgICAgIHRvZG9zOiAoKSA9PiB0b2RvcyxcclxuICAgICAgICB0b2RvOiAocGFyZW50LCB7IGlkeCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZHggPCAwIHx8IGlkeCA+PSB0b2Rvcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luZGV4IGlzIG91dCBvZiBib3VuZHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaWR4IH07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBUb2RvSXRlbSxcclxuICAgIE11dGF0aW9uOiB7XHJcbiAgICAgICAgYWRkVG9kbzogKHBhcmVudCwgeyB0aXRsZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG86IFRvZG9JdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IEdRTFRvZG9TdGF0dXMuVE9ETyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdG9kb3MucHVzaChuZXdUb2RvKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1RvZG87XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2RvOiAocGFyZW50LCB7IGlkeCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZHggPCAwIHx8IGlkeCA+PSB0b2Rvcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luZGV4IGlzIG91dCBvZiBib3VuZHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaWR4IH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFRvZG9PcHMsXHJcbn07XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcclxuICAgIHR5cGVEZWZzLFxyXG4gICAgcmVzb2x2ZXJzLFxyXG59KTtcclxuXHJcbnNlcnZlci5saXN0ZW4oKS50aGVuKCh7IHVybCB9KSA9PiBjb25zb2xlLmxvZyh1cmwpKTsiXX0=