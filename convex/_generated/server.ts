/* eslint-disable */
/**
 * Generated utilities for implementing server-side Convex query and mutation functions.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import {
	type ActionBuilder,
	actionGeneric,
	httpActionGeneric,
	internalActionGeneric,
	internalMutationGeneric,
	internalQueryGeneric,
	type MutationBuilder,
	mutationGeneric,
	type QueryBuilder,
	queryGeneric,
	TableNamesInDataModel,
} from 'convex/server'
import type { DataModel } from './dataModel'

/**
 * Define a query in this Convex app's public API.
 *
 * This function will be allowed to read your Convex database and will be accessible from the client.
 *
 * @param func - The query function. It receives a `QueryCtx` as its first argument.
 * @returns The wrapped query. Include this as an `export` to add it to your app's API.
 */
export const query = queryGeneric as QueryBuilder<DataModel, 'public'>

/**
 * Define a mutation in this Convex app's public API.
 *
 * This function will be allowed to modify your Convex database and will be accessible from the client.
 *
 * @param func - The mutation function. It receives a `MutationCtx` as its first argument.
 * @returns The wrapped mutation. Include this as an `export` to add it to your app's API.
 */
export const mutation = mutationGeneric as MutationBuilder<DataModel, 'public'>

/**
 * Define an action in this Convex app's public API.
 *
 * An action is a function which can execute any JavaScript code, including non-deterministic
 * code and code with side-effects, like calling third-party services.
 * They can be run in Convex's JavaScript environment or in Node.js using the "use node" directive.
 * They can interact with the database indirectly by calling queries and mutations using the provided `ctx.runQuery` and `ctx.runMutation` functions.
 *
 * @param func - The action function. It receives an `ActionCtx` as its first argument.
 * @returns The wrapped action. Include this as an `export` to add it to your app's API.
 */
export const action = actionGeneric as ActionBuilder<DataModel, 'public'>

/**
 * Define an HTTP action in this Convex app's public API.
 *
 * HTTP actions are run in response to HTTP requests and can return HTTP responses.
 * They can be run in Convex's JavaScript environment or in Node.js using the "use node" directive.
 * They can interact with the database indirectly by calling queries and mutations using the provided `ctx.runQuery` and `ctx.runMutation` functions.
 *
 * @param func - The HTTP action function. It receives an `ActionCtx` as its first argument, and a `Request` object as its second.
 * @returns The wrapped HTTP action. Include this as an `export` to add it to your app's API.
 */
export const httpAction = httpActionGeneric

/**
 * Define a query function that is only accessible from other Convex functions (but not from the client).
 *
 * This function will be allowed to read from your Convex database. It will not be accessible from the client.
 *
 * @param func - The query function. It receives a `QueryCtx` as its first argument.
 * @returns The wrapped query. Include this as an `export` to add it to your app's API.
 */
export const internalQuery = internalQueryGeneric as QueryBuilder<DataModel, 'internal'>

/**
 * Define a mutation function that is only accessible from other Convex functions (but not from the client).
 *
 * This function will be allowed to modify your Convex database. It will not be accessible from the client.
 *
 * @param func - The mutation function. It receives a `MutationCtx` as its first argument.
 * @returns The wrapped mutation. Include this as an `export` to add it to your app's API.
 */
export const internalMutation = internalMutationGeneric as MutationBuilder<DataModel, 'internal'>

/**
 * Define an action function that is only accessible from other Convex functions (but not from the client).
 *
 * @param func - The action function. It receives an `ActionCtx` as its first argument.
 * @returns The wrapped action. Include this as an `export` to add it to your app's API.
 */
export const internalAction = internalActionGeneric as ActionBuilder<DataModel, 'internal'>
