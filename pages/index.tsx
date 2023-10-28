import { NextPage,GetStaticProps } from "next";

import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Layouts } from "@/components/layout";
import { pokeApi } from "@/api";
import { PokemonCard } from "@/components/pokemon";





interface Props {
  pokemons: SmallPokemon[]
}


const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layouts title="Listado de Pokemon">
        <ul className="grid 2xl:grid-cols-6 lx:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-10">
          {pokemons.map((poke) => (
              <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </ul>
      </Layouts>
    </>
  );
};


export const getStaticProps: GetStaticProps = async (ctx) => {
 
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons:SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))

  return {
    props: {
       pokemons
    }
  }
}

export default Home;