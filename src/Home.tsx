import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  const [value, setValue] = useState(100000);
  const [parts, setParts] = useState(10);

  useEffect(() => {
    document.title = "Tu Token - Tokenización de Activos en Argentina";
  }, []);

  const tokens = Array.from({ length: parts }, (_, i) => ((value / parts).toFixed(2)));

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-0">
          <source src="/video-edificio.mp4" type="video/mp4" />
        </video>
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0" />
        <motion.div 
          className="z-10 text-center px-4"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-4">Tokenizá. Invertí. Escalá.</h1>
          <p className="text-xl mb-6">La primera plataforma de tokenización de activos de Argentina</p>
          <Button className="text-lg px-6 py-3">Quiero tokenizar mi activo</Button>
        </motion.div>
      </section>
    </main>
  );
}
