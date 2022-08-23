import Head from 'next/head';
import Table from '../../src/todoList/show_table/table'
import  Header  from '../../src/Home/header';
import  Footer  from '../../src/Home/footer';

export default function Home() {
  return (
    <div>
            <Head>
              <title>List</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
          <Table></Table>
          <Footer/>
    </div>
  )
}
