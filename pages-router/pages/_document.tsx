import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased min-h-screen flex flex-col p-2">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
