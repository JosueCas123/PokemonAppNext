import { Layout } from "@/components/layout";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";


const Home:NextPage = () => {
  return (
   <>
   <Layout title="Listado de Polemon">
      <Button color='success'>
        hola
      </Button>
   </Layout>
   </>
  )
}


export default Home;