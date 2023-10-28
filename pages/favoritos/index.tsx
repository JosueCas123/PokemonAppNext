import React, { useEffect, useState } from 'react'
import { Layouts } from '@/components/layout'
import {NoFavorites} from '@/components/ui/NoFavorites'
import { localFavorites } from '@/utils'
import { FavoritesPokemons } from '@/components/pokemon'






const FavoritesPage = () => {

  const [pokemon, setPokemon] = useState<number[]>([])

    useEffect(() => {
        setPokemon(localFavorites.pokemon())
    }, [])
  return (
    <Layouts title='Fovoritos'>

        {
          pokemon.length === 0
            ? (<NoFavorites/>)
            :(
              <FavoritesPokemons pokemon={pokemon} />
            )
        }
     
    </Layouts>
  )
}

export default FavoritesPage