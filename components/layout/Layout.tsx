import { FC, ReactNode} from "react"
import Head from "next/head"
import { Navbar } from "../ui";
interface LayoutProps {
  children: ReactNode;
  title:string
}

const oringin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layouts:FC<LayoutProps> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Josue Castillo" />
        <meta name="description" content="informacion del polemon XXX" />
        <meta name="keywords" content="pokemon, pokedex, pokedex, pokedex" />

        <meta property="og:title" content={`Infomacion sobre: ${title}`}/>
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${oringin}/img/banner.png`} />
      </Head>

      <Navbar/>

      <main className="w-11/12 pt-5 m-auto">
        {children}
      </main>
    
    </>
  )
}
