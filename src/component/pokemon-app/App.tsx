import {
  useGetPokemonByNameQuery,
  // ,useGetProjectByNameQuery,
  useGetProjectsQuery
} from './services/pokemon'

export default function App() {
  // const { data, error, isLoading } = useGetPokemonByNameQuery('charmeleon')
  const { data:projectData, error:projectError, isLoading:projectIsLoading } = useGetProjectsQuery()

  return (
    <div className='App'>
      {/* {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null} */}
      {projectError ? (
        <>Oh no, there was an error</>
      ) : projectIsLoading ? (
        <>Loading...</>
      ) : projectData ? (
        <>
          <h3>project data</h3>
        </>
      ) : null}
    </div>
  )
}
