import '../styles/globals.css'

import {DEBUG} from '../constants'

function MyApp({ Component, pageProps }) {
  if (DEBUG) {
    console.log('nice');
  }
  return <Component {...pageProps} />
}

export default MyApp
