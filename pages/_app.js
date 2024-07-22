import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Navbar from './layouts/navbar'
import { usePathname } from 'next/navigation'
import Footer from './layouts/footer'
import { QueryClient, QueryClientProvider } from 'react-query'



export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const pathname = usePathname()
  const queryClient = new QueryClient()
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
      
          {pathname !== '/login' && <Navbar />}
          <Component {...pageProps} />
          {pathname !== '/dashboard' && <Footer />}
       
      </QueryClientProvider>
    </SessionProvider>
  )
}
