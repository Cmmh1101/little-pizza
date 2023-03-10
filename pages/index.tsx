import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/components/styles/Home.module.css";
import MainHero from "../components/layout/MainHero";
import OrderNow from "../components/home/OrderNow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Little Italy East Memphis | Pizza and Pasta</title>
        <meta
          name="description"
          content="Little Italy East Memphis | Pizza and Pasta"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHero />
      <main>
        <OrderNow />
      </main>
    </>
  );
}
