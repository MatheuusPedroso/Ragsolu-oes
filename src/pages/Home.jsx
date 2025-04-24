import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion"; 
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="p-6 shadow-md sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo RAG" className="h-10 w-auto" />
            <h1 className="text-xl font-bold">RAG Soluções</h1>
          </div>
          <nav className="space-x-6">
            <a href="#lema" className="hover:underline">Nosso Lema</a>
            <a href="#projetos" className="hover:underline">Projetos</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      {/* Página principal / Contato */}
      <section id="contato" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-4">
            Conecte-se com a RAG Soluções
          </motion.h2>
          <p className="text-lg mb-8">
            Somos uma startup dedicada a formar e inserir mulheres no mercado de tecnologia.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline"><Mail className="mr-2" /> contato@ragsolucoes.com</Button>
            <Button variant="outline"><Instagram className="mr-2" /> @ragsolucoes</Button>
            <Button variant="outline"><Linkedin className="mr-2" /> RAG Soluções</Button>
          </div>
        </div>
      </section>

      {/* Nosso Lema */}
      <section id="lema" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6">
            Nosso Lema
          </motion.h2>
          <p className="text-lg leading-relaxed">
            A RAG Soluções nasceu com o propósito de mudar a realidade da tecnologia no Brasil, capacitando mulheres em áreas como desenvolvimento backend e análise de dados. Acreditamos que tecnologia só é verdadeiramente inovadora quando é diversa e inclusiva. Nosso compromisso é ser a ponte entre o aprendizado e a primeira oportunidade profissional.
          </p>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-10 text-center">
            Projetos Realizados
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Plataforma Educacional</h3>
                <p>Desenvolvimento de uma plataforma para capacitação de alunas em backend.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Sistema de Votação Digital</h3>
                <p>Projeto realizado com foco em segurança e escalabilidade, feito por alunas formadas.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Dashboard de Dados</h3>
                <p>Visualização de métricas para cliente do setor educacional, feito com ferramentas open source.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

}
  
