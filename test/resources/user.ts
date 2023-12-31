import { defineResource, json } from '../../src/server'

export const user = defineResource({
  key: 'users',
  collection: {
    methods: {
      GET: {
        operationId: 'getUsers',
        validateSearch: (search) => {
          return {
            limit: 10,
          }
        },
        validateHeaders: (headers) => headers,
        // GET requests do not have body
        // validateBody: (body) => {
        // 	return {
        // 		name: "John Doe",
        // 	};
        // },
        handler: async (req) => {
          return {
            status: 200,
            body: {
              users: [],
            },
          }
        },
      },
      POST: {
        operationId: 'createUser',
        validateSearch: (search) => search,
        validateHeaders: (headers) => headers,
        // Check validateBody throws type error in GET
        validateBody: (body) => {
          return {
            name: 'John Doe',
          }
        },
        handler: async (req) => {
          return json({
            user: {
              id: '123',
              name: 'John Doe',
            },
          })
        },
      },
    },
  },
  item: {
    methods: {
      GET: {
        operationId: 'getUser',
        validateSearch: (search) => {
          return {
            limit: 10,
          }
        },
        validateHeaders: (headers) => headers,
        validateBody: (body) => body,
        handler: async ({ search }) => {
          return json({
            user: {},
          })
        },
      },
      DELETE: {
        operationId: 'deleteUser',
        validateSearch: (search) => search,
        validateHeaders: (headers) => headers,
        validateBody: (body) => body,
        handler: async ({ search }) => {
          return {
            status: 200,
            body: {
              user: {},
            },
          }
        },
      },
    },
  },
})
