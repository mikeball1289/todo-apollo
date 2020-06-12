/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuery {
  todos?: Array<GQLTodoItem | null>;
}

export interface GQLTodoItem {
  title?: string;
  status?: GQLTodoStatus;
}

export const enum GQLTodoStatus {
  COMPLETE = 'COMPLETE',
  IN_PROGRESS = 'IN_PROGRESS',
  TODO = 'TODO'
}

export interface GQLMutation {
  addTodo?: GQLTodoItem;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Query?: GQLQueryTypeResolver;
  TodoItem?: GQLTodoItemTypeResolver;
  Mutation?: GQLMutationTypeResolver;
}
export interface GQLQueryTypeResolver<TParent = any> {
  todos?: QueryToTodosResolver<TParent>;
}

export interface QueryToTodosResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLTodoItemTypeResolver<TParent = any> {
  title?: TodoItemToTitleResolver<TParent>;
  status?: TodoItemToStatusResolver<TParent>;
}

export interface TodoItemToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface TodoItemToStatusResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMutationTypeResolver<TParent = any> {
  addTodo?: MutationToAddTodoResolver<TParent>;
}

export interface MutationToAddTodoArgs {
  title: string;
}
export interface MutationToAddTodoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToAddTodoArgs, context: any, info: GraphQLResolveInfo): TResult;
}
