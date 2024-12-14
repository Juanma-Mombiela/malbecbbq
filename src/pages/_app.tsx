import type { AppProps } from 'next/app';
import '../styles/globals.css';

// Componente App que envuelve tu aplicación
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
