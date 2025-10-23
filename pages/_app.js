import "@/styles/globals.css";
import Layout from "../components/comonent/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
