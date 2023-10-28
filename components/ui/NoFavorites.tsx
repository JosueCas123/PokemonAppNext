import { Image } from '@nextui-org/react'


export const NoFavorites = () => {

    
    

  return (
    <section style={{
        display:'flex',
        flexDirection:'column',
        height:'calc(100vh - 100px)',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    }}>
        <h2>No hay favorotos</h2>
        <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
            width={250}
            height={250}
            style={{opacity:0.1}}
        />
    </section>
  )
}
