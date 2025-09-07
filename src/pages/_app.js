import '@/styles/font.css';
import "@/styles/globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="main_wrapper">
        {/* { !is404Page && <Header /> } */}
        <Header />
        <Component {...pageProps} />
        <Footer />
        {/* { !is404Page && <Footer /> } */}
      </main>
    </>
  )
}
