import Head from "next/head";
import { Inter } from "next/font/google";
import MainHero from "../components/utils/MainHero";
import OrderNow from "../components/home/OrderNow";
import Banner from "../components/home/Banner";
import ContactSection from "../components/home/ContactSection";
import Gallery from "../components/home/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Little Italy East Memphis | Pizza, Pasta, and Subs</title>
        <meta
          name="description"
          content="Little Italy East Memphis | Pizza Pasta and Subs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHero />
      <main className="tracking-wider">
        <OrderNow />
        <Gallery />
        <Banner />
        <ContactSection />
      </main>
    </>
  );
}
