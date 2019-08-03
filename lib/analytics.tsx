import ReactGA from 'react-ga'

export const initGA = () => {
  let ga_tracking: any = process.env.GA_TRACKING;
  ReactGA.initialize(ga_tracking.toString(), {
    testMode: true
  });
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}