import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-32">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 text-black">
            Organisez vos projets avec <span className="text-black">Trello-Clone</span>
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Gérez vos tâches, vos projets et collaborez facilement avec vos équipes. Un outil simple et rapide pour rester productif.
          </p>
          <div className="flex gap-4">
            <a
              href="/board"
              className="px-6 py-3 bg-black text-white no-underline rounded-lg shadow hover:bg-gray-200 hover:text-black transition"
              
            >
              Commencer
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-200 hover:text-black hover:border-2px transition"
            >
              Découvrir les fonctionnalités
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Image ou illustration */}
          <img
            src="/logo.png"
            alt="Board illustration"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-20 py-16 rounded-t-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-black-700">
          Pourquoi utiliser Trello-Clone ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Simple et rapide</h3>
            <p>Créez et déplacez vos cartes facilement grâce au drag & drop intuitif.</p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Collaboration</h3>
            <p>Partagez vos tableaux avec vos amis ou collègues et restez synchronisés.</p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Flexible</h3>
            <p>Organisez vos projets comme vous voulez, avec plusieurs colonnes et catégories.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-black">
          Prêt à booster votre productivité ?
        </h2>
        <a
          href="/board"
          className="px-8 py-4 bg-black text-white no-underline rounded-lg shadow hover:bg-gray-200 hover:text-black transition text-lg"
        >
          Lancer l'application
        </a>
      </section>
    </main>
  );
}
