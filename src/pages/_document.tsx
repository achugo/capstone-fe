import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue&family=Ubuntu&display=swap"
                    rel="stylesheet"
                />
                <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9054850819657626"
                    crossOrigin="anonymous"></script>
            </Head>
            <body className="h-screen">

                <Main />
                <NextScript />
                <Footer />
            </body>
        </Html>
    );
}
