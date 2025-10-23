import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({children}) => {

    return ( 
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Hotel" />
            <title>Claim Free Sol No.1 Solana Burner High Affiliate Commissions</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
            <link href="https://fonts.googleapis.com/css2?family=Dinkie&display=swap" rel="stylesheet"></link>
        </Head>
        <Header/>
        <main className="h-max w-screen flex">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;