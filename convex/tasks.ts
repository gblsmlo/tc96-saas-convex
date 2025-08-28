import { type QueryCtx, query } from './_generated/server'

export const get = query({
	args: {},
	handler: async (ctx: QueryCtx) => {
		return await ctx.db.query('tasks').collect()
	},
})
