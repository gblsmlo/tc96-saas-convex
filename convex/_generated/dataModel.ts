/* eslint-disable */
/**
 * Generated data model types.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { AnyDataModel } from 'convex/server'
import type { GenericId } from 'convex/values'

/**
 * No `schema.ts` file found!
 *
 * This generated code has permissive types like `Doc = any` because Convex doesn't know your schema.
 *
 * If you'd like more type safety, see https://docs.convex.dev/database/schemas.
 */

/**
 * The names of all of your Convex tables.
 */
export type TableNames = string

/**
 * The type of a document stored in Convex.
 */
export type Doc<TableName extends TableNames = TableNames> = any

/**
 * An identifier for a document in Convex.
 *
 * Convex documents are uniquely identified by their `Id`, which is accessible
 * on the `_id` field. To learn more, see https://docs.convex.dev/database/document-ids.
 *
 * Documents can be loaded using `db.get(id)` in query and mutation functions.
 *
 * **Important**: Use `myId.equals(otherId)` to check for equality. Using
 * `===` will not work because two different references to the same document
 * will not be equal with `===`.
 */
export type Id<TableName extends TableNames = TableNames> = GenericId<TableName>

/**
 * A type describing your Convex data model.
 *
 * This type is used to parameterize methods like `queryGeneric` and
 * `mutationGeneric` to make them type-safe.
 */
export interface DataModel extends AnyDataModel {
	[key: string]: {
		document: Doc
		fieldPaths: string
		indexes: {}
		searchIndexes: {}
		vectorIndexes: {}
	}
}
