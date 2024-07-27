import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";


export const metadata = {
  title: "Let's Do It Together",
  description: "Association qui promeut l'entraide l'epanouissement et la solidarité des jeunes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={"defaultText"}>
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Let's Do It Together</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header />
      {children}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Let's Do It Together. Tous droits réservés.</p>
          <p>Association à but non lucratif régie par la loi du 1er juillet 1901</p>
          <p>Siège social : 34080 Montpellier, Occitanie</p>
        </div>
      </footer>
    </div>
    </body>
    </html>
);
}
