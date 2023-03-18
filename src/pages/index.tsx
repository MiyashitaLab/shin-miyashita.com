import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2">
        <h1 className="text-3xl font-bold text-blue-500 underline">
          Hello world!
        </h1>
        <h2 className={"text-2xl"}>
          人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは
        </h2>
      </main>
    </>
  );
}
