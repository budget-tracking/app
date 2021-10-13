import type { GetServerSideProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

const Home: NextPage = () => {
  const router = useRouter()
  const { data: session, status } = useSession()
  if (status === "loading") return null

  return (
    <>
      <Head>
        <title>Budget Tracker</title>
        <meta name="description" content="Analyze your routine expenses by giving them priority" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          session &&
          <button
            className="btn primary-btn"
            onClick={() => router.push('/dashboard')}
          >Go to Dashboard</button>
        }
      </main>
    </>
  )
}

export default Home
