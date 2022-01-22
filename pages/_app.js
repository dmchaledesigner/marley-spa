import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';


import Navigation from '../components/Navigation';
import Layout from '../components/ui/Layout';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  return (

    <Layout className="wrapper">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </Layout>

  );
}







export default MyApp
