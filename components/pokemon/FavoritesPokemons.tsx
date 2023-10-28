import { FC } from 'react';
import { FavoritesCard } from '.';

interface Props {
    pokemon:number[]
}

export const FavoritesPokemons:FC<Props> = ({pokemon}) => {
  return (
    <div className='w-full grid 2xl:grid-cols-6 lx:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-10 '>

                {
                  pokemon.map( id => (
                      <FavoritesCard key={id} pokemonId={id}/>
                  ))
                }

              </div>
  )
}
