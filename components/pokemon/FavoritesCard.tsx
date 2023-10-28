import React from 'react'
import { Card,CardBody, Image } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number;
}


export const FavoritesCard:FC<Props> = ({pokemonId}) => {
    const router = useRouter()

    const onClick = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

  return (
    <Card className='flex justify-center items-center' isPressable onClick={onClick} >
        <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        />
    </Card>
  )
}
