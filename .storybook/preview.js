import { RouterContext } from "next/dist/shared/lib/router-context";
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';


const MockStore = ({ children }) => {
  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}

export const decorators = [ story=><MockStore>{story()}</MockStore>]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
   nextRouter: {
    Provider: RouterContext.Provider,
  },
}

