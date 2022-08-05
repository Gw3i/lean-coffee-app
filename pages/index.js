import Head from "next/head";
import GlobalStyle from "../GlobalStyle";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Lean Coffee App</title>
      </Head>
    </>
  );
}
