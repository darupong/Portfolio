import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
