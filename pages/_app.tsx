import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Layout from '@components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
export default App
