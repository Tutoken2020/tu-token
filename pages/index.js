
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head>
        <title>Tu Token - Tokenización de Activos</title>
      </Head>
      <main className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Tokenizá. Invertí. Escalá.</h1>
        <p className="text-xl">La primera plataforma de tokenización de activos de Argentina</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Quiero tokenizar mi activo</button>
      </main>
    </div>
  );
}
