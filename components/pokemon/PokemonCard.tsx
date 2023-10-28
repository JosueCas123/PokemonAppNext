import { SmallPokemon } from '@/interfaces'
import React, { FC } from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useRouter } from 'next/router';
interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard:FC<Props> = ({pokemon}) => {

  const router = useRouter()
  //funcion para hacer la navegacion de la ruta
  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  
  }


  return (
    <li className="w-full h-full" key={pokemon.id}>
              <Card shadow="sm" key={pokemon.id} isPressable onClick={onClick} className="h-full">
                <CardBody className="">
                  <div className="h-0 relative overflow-hidden pb-[100%]">
                    <Image
                      src={pokemon.img}
                      alt={pokemon.name}
                      width="100%"
                      height='100%'
                      
                    />
                  </div>
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{pokemon.name}</b>
                  <p className="text-default-500">{pokemon.id}</p>
                </CardFooter>
              </Card>
            </li>
  )
}
