import '../styles/globals.css'

import {DEBUG} from '../constants'

function MyApp({ Component, pageProps }) {
  if (DEBUG) {
    console.log('sanity', "This is okay, since it is gated in a DEBUG.");
  }
  return <Component {...pageProps} />
}

export default MyApp
