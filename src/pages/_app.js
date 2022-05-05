import '../styles/globals.css'
import wrapper from '../redux/store'
import Error from "next/error";

const MyApp = ({ Component, pageProps }) => {
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }
  return (
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp)
