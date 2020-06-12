"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
require("graphql-import-node");
var schema_gql_1 = __importDefault(require("../gql/schema.gql"));
var number = function (parent, _a) {
    var n = _a.n;
    return ({
        value: n
    });
};
var Number = {
    next: function (parent) { return ({ value: parent.value + 1 }); },
    prev: function (parent) { return ({ value: parent.value - 1 }); },
};
var resolvers = {
    Query: {
        helloWorld: function () { return 'hello world'; },
        number: number
    },
    Number: Number
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: schema_gql_1.default,
    resolvers: resolvers,
});
server.listen().then(function (_a) {
    var url = _a.url;
    return console.log(url);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTBFO0FBQzFFLCtCQUE2QjtBQUM3QixpRUFBeUM7QUFXekMsSUFBTSxNQUFNLEdBQWtELFVBQUMsTUFBTSxFQUFFLEVBQUs7UUFBSCxDQUFDLE9BQUE7SUFBTyxPQUFBLENBQUM7UUFDOUUsS0FBSyxFQUFFLENBQUM7S0FDWCxDQUFDO0FBRitFLENBRS9FLENBQUM7QUFFSCxJQUFNLE1BQU0sR0FBeUQ7SUFDakUsSUFBSSxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQTdCLENBQTZCO0lBQzdDLElBQUksRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUE3QixDQUE2QjtDQUNoRCxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQTZCO0lBQ3hDLEtBQUssRUFBRTtRQUNILFVBQVUsRUFBRSxjQUFNLE9BQUEsYUFBYSxFQUFiLENBQWE7UUFDL0IsTUFBTSxRQUFBO0tBQ1Q7SUFDRCxNQUFNLFFBQUE7Q0FDVCxDQUFDO0FBRUYsSUFBTSxNQUFNLEdBQUcsSUFBSSw0QkFBWSxDQUFDO0lBQzVCLFFBQVEsc0JBQUE7SUFDUixTQUFTLFdBQUE7Q0FDWixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTztRQUFMLEdBQUcsU0FBQTtJQUFPLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvU2VydmVyLCBJUmVzb2x2ZXJzLCBJUmVzb2x2ZXJPYmplY3QgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcclxuaW1wb3J0ICdncmFwaHFsLWltcG9ydC1ub2RlJztcclxuaW1wb3J0IHR5cGVEZWZzIGZyb20gJy4uL2dxbC9zY2hlbWEuZ3FsJztcclxuaW1wb3J0IHtcclxuICAgIEdRTFJlc29sdmVyLFxyXG4gICAgUXVlcnlUb051bWJlclJlc29sdmVyLFxyXG4gICAgR1FMTnVtYmVyVHlwZVJlc29sdmVyLFxyXG59IGZyb20gJy4vZ3JhcGhxbFR5cGVzJztcclxuXHJcbmludGVyZmFjZSBOdW1iZXJWYWx1ZSB7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBudW1iZXI6IFF1ZXJ5VG9OdW1iZXJSZXNvbHZlcjx1bmRlZmluZWQsIE51bWJlclZhbHVlPiA9IChwYXJlbnQsIHsgbiB9KSA9PiAoe1xyXG4gICAgdmFsdWU6IG5cclxufSk7XHJcblxyXG5jb25zdCBOdW1iZXI6IEdRTE51bWJlclR5cGVSZXNvbHZlcjxOdW1iZXJWYWx1ZT4gJiBJUmVzb2x2ZXJPYmplY3QgPSB7XHJcbiAgICBuZXh0OiBwYXJlbnQgPT4gKHsgdmFsdWU6IHBhcmVudC52YWx1ZSArIDEgfSksXHJcbiAgICBwcmV2OiBwYXJlbnQgPT4gKHsgdmFsdWU6IHBhcmVudC52YWx1ZSAtIDEgfSksXHJcbn07XHJcblxyXG5jb25zdCByZXNvbHZlcnM6IEdRTFJlc29sdmVyICYgSVJlc29sdmVycyA9IHtcclxuICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgaGVsbG9Xb3JsZDogKCkgPT4gJ2hlbGxvIHdvcmxkJyxcclxuICAgICAgICBudW1iZXJcclxuICAgIH0sXHJcbiAgICBOdW1iZXJcclxufTtcclxuXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xyXG4gICAgdHlwZURlZnMsXHJcbiAgICByZXNvbHZlcnMsXHJcbn0pO1xyXG5cclxuc2VydmVyLmxpc3RlbigpLnRoZW4oKHsgdXJsIH0pID0+IGNvbnNvbGUubG9nKHVybCkpOyJdfQ==