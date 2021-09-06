// import '../styles/globals.css'
import { theme } from 'twin.macro';
import GlobalStyles from './../components/GlobalStyles';
import { MinScreenProvider } from '../hooks/minScreen';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MinScreenProvider screens={theme`screens`}>
        <GlobalStyles />
        <Component {...pageProps} />
      </MinScreenProvider>
    </>
  );
}

export default MyApp;
