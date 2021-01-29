import ReactGA from "react-ga"
import { useEffect } from 'react';


const initGA = () => {
  ReactGA.initialize('UA-151396051-1')
}
 
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default function GAWrapper(props) {
  useEffect(() => {

    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()

  }, []);

  return (
    <>
      {props.children}
    </>
  )
}
