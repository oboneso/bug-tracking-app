import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App/App'

Sentry.init({
  dsn: "https://1ec243f938e2444abe051e0fdc4cfd60@o499235.ingest.sentry.io/5577531",
  autoSessionTracking: true,
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
