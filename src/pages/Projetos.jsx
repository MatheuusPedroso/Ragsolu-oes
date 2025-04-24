import React from "react";

export default function Projetos() {
  return (
    <section className="py-20 px-4 bg-gray-100" id="projetos">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projetos Realizados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Plataforma Educacional</h3>
            <p>Desenvolvimento de uma plataforma para capacitação de alunas em backend.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Sistema de Votação Digital</h3>
            <p>Projeto realizado com foco em segurança e escalabilidade, feito por alunas formadas.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Dashboard de Dados</h3>
            <p>Visualização de métricas para cliente do setor educacional, feito com ferramentas open source.</p>
          </div>
        </div>
      </div>
    </section>
  );
}