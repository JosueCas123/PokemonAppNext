import { useRef, useState, FC } from 'react';
import { Layouts } from "@/components/layout"
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import confetti from "canvas-confetti";
import { getPokemonInfo, localFavorites } from '@/utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PokemonListResponse } from '@/interfaces';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces/pokemon-full';

interface Props {
    pokemon:Pokemon

}

const PokemonByNamePage:FC<Props> = ({pokemon}) => {
    const [isFavorites, setIsFavorites] = useState(localFavorites.existeFavorito(pokemon.id))
    const buttonRef = useRef(null);
    console.log(isFavorites)
    
    const onToggleFavorites = () => {
      localFavorites.toggleFavirites(pokemon.id)
      setIsFavorites(!isFavorites)
    }
    
    const handleConfetti = () => {
      confetti({
        zIndex:999,
        particleCount:100,
        spread:160,
        angle:-100,
        origin:{
          x:1,
          y:0
        }
      })
    };
  return (
    <Layouts title={pokemon.name}>
    <div className='w-full flex gap-5'>
      <div className='w-2/5 h-72'>
          <Card key={pokemon.id} isPressable className='w-full h-full'>
              <CardBody className=' fel items-center '>
                  <Image
                    src={pokemon.sprites.other?.dream_world.front_default}
                    alt={pokemon.name}
                    
                  />
              </CardBody>

          </Card>
      </div>
      <div className='w-3/5 h-72'>
          <Card className='w-full h-full'>
            <CardHeader className='flex justify-between'>
     
              <h1>{pokemon.name}</h1>
              
              <Button
                    ref={buttonRef}
                    disableRipple
                    className="relative overflow-visible rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    onPress={handleConfetti}
                    onClick={onToggleFavorites}
                >                   
                  {isFavorites ? 'En favoritos' : 'Agregar a favoritos'}
                </Button>
            </CardHeader>
            <CardBody>
              <p className='text-lg font-semibold'>Scrites:</p>

              <section className='flex justify-center items-center lg:justify-between'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                
                />
              </section>
            </CardBody>
          </Card>
      </div>
    </div>
</Layouts>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)
    const pokemoName = data.results.map(pokemon => pokemon.name)
   
    return {
      paths:pokemoName.map(name => ({
        params:{name}
      })) ,
      fallback: false
    }
  }
  
  
  export const getStaticProps: GetStaticProps = async (ctx) => {
  
    //una vez que se ejecuta el getStaticPats pasara getStaticProps
    //desectruramos lo que viene en ctx.params
    const {name} = ctx.params as {name:string}
    getPokemonInfo(name)
    
    return {
      props: {
        pokemon: await getPokemonInfo(name)
      }
    }
  }

  
  
export default PokemonByNamePage