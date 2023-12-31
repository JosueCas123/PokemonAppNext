import React from 'react'
import {useTheme} from "next-themes";
import Image from 'next/image';
import Link from 'next/link';


export const Navbar = () => {
    const { theme} = useTheme()
    const spacerStyle = {
        flex: 1,
      };
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0px 20px',
       
        background: (theme as any)?.background || '#282626'
    }}>

      {/* al monmento de buil va ir a traer  porque esatas paginas usan el static gemeation*/}
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='pokemon'
        width={70}
        height={70}
      />
      <Link href='/' passHref className='flex justify-center items-center'>
          <h2 className='text-3xl font-bold'>P</h2>
          <h3 color='withe'>okemon</h3>
      </Link>

        <div style={spacerStyle} />
        <Link href='/favoritos' passHref>
          <p>favoritos</p>
        </Link>
    </div>
  )
}
