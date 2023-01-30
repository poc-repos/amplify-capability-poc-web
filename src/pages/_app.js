import '@/styles/globals.css'
import { ThemeProvider, Authenticator } from "@aws-amplify/ui-react";
import { Amplify, Analytics } from 'aws-amplify';

import awsconfig from '../aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../ui-components";

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }) {

  //enable session tracking
  Analytics.autoTrack('session', {
    enable: true,
  });

  //enabel page-view tracking
  Analytics.autoTrack('pageView', {
    // REQUIRED, turn on/off the auto tracking
    enable: true,
    // OPTIONAL, the event name, by default is 'pageView'
    eventName: 'pageView',
    // OPTIONAL, by default is 'multiPageApp'
    // you need to change it to 'SPA' if your app is a single-page app like React
    type: 'multiPageApp',
    // OPTIONAL, the service provider, by default is the Amazon Pinpoint
    provider: 'AWSPinpoint',
    // OPTIONAL, to get the current page url
    getUrl: () => {
      // the default function
      return window.location.origin + window.location.pathname;
    }
  });

  return (
    <ThemeProvider theme={studioTheme}>
      <Authenticator hideSignUp={true} variation="modal">
        <Component {...pageProps} />
      </Authenticator>
    </ThemeProvider>
  )
}