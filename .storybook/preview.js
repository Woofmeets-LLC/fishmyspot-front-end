import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from "@storybook/react";
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

const customViewports = {
  xs: {
    name: 'Extra Small Device',
    styles: {
      width: '411px',
      height: '732px',
    },
  },
  sm: {
    name: 'Small Device',
    styles: {
      width: '540px',
      height: '960px',
    },
  },
  smd: {
    name: 'Small-medium Device',
    styles: {
      width: '640px',
      height: '960px',
    },
  },
  md: {
    name: 'Medium Device',
    styles: {
      width: '768px',
      height: '480px',
    },
  },
  Lg: {
    name: 'Large Device',
    styles: {
      width: '1024px',
      height: '640px',
    },
  },
  xl: {
    name: 'Extra Large Device',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  '2xl': {
    name: '2x Large Device',
    styles: {
      width: '1400px',
      height: '800px',
    },
  },
  '3xl': {
    name: '3x Large Device',
    styles: {
      width: '1920px',
      height: '1200px',
    },
  }
}

addParameters({
  viewport: {
    viewports: {...INITIAL_VIEWPORTS, ...customViewports},
  }
})
