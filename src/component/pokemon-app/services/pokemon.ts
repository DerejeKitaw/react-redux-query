import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export interface Project {
  id: string
  name: string
}
export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
})
type ProjectsResponse = Project[]
export const projectApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  tagTypes: ['Get'],
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectsResponse,void>({
      query: () => `projects`,
      providesTags: (result) =>
      result
        ? [
            ...result.map(({ id }) => ({ type: 'Get' as const, id })),
            { type: 'Get', id: 'LIST' },
          ]
        : [{ type: 'Get', id: 'LIST' }],
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi
export const { useGetProjectsQuery } = projectApi
