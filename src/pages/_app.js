import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="main_wrapper">
        {/* { !is404Page && <Header /> } */}
        <Component {...pageProps} />
        {/* { !is404Page && <Footer /> } */}
      </main>
    </>
  )
}
