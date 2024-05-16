import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@icon-park/react/styles/index.css';
import ClientProvider from "./client";



const productSans = localFont({
  src: [
    {
      path: './../../public/assets/product-sans/Product\ Sans\ Regular.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './../../public/assets/product-sans/Product\ Sans\ Italic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: './../../public/assets/product-sans/Product\ Sans\ Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './../../public/assets/product-sans/Product\ Sans\ Bold\ Italic.ttf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-product-sans'
});


export const metadata: Metadata = {
  title: "Web API test",
  description: "",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`overflow-hidden ${productSans.className}`}>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
