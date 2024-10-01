import Footer from "@/components/footer/footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
