import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/font.css';
import "@/styles/globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ReactLenis, useLenis } from 'lenis/react';

export default function App({ Component, pageProps }) {

  const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});

  return (
    <>
      <ReactLenis root>
        <main className="main_wrapper">
          {/* { !is404Page && <Header /> } */}
          <Header />
          <Component {...pageProps} />
          <Footer />
          {/* { !is404Page && <Footer /> } */}
        </main>
      </ReactLenis>
    </>
  )
}
