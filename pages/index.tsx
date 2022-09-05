import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Main from '../Components/Main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shoe Cart </title>
      </Head>
      <Header />
      <Main />
    </div>
  )
}

export default Home
