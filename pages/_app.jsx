import {Provider} from 'react-redux'
import Store from "../store";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
     )
}

export default MyApp
