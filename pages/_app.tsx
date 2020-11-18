import '../styles/tailwind.css'

interface NextApp { Component: any, pageProps: any}

function MyApp({ Component, pageProps }: NextApp) {
  return <Component {...pageProps} />
}

export default MyApp
