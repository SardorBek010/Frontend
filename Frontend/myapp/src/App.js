import './App.css';

function App() {
  const projects = [
    { id: 1, title: "Portfolio Sayt", desc: "Shaxsiy portfolio saytim React bilan." },
    { id: 2, title: "Blog Platforma", desc: "Foydalanuvchilar post qo‘shishi va o‘qishi mumkin." },
    { id: 3, title: "E-commerce", desc: "Mahsulotlar do‘koni, savatcha va buyurtmalar tizimi." },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-800 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-400">Sardorbek.dev</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32">
        <h2 className="text-5xl font-bold mb-4">Salom, men Sardorbek 👋</h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Men web dasturchiman. React va Node.js bilan zamonaviy veb ilovalar yarataman.
        </p>
        <a href="#projects" className="mt-8 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Loyihalarimni ko‘rish
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-10 bg-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-center">Men haqimda</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          Men web dasturchiman. HTML, CSS, JavaScript, React, Node.js va MongoDB texnologiyalarida ishlayman.
          Maqsadim — samarali va chiroyli veb-ilovalar yaratish. Portfolio saytlar, bloglar va e-commerce tizimlarini yaratdim.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Loyihalarim</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
              <h3 className="text-2xl font-semibold text-blue-400">{p.title}</h3>
              <p className="text-gray-400 mt-3">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-10 bg-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-center">Aloqa</h2>
        <p className="text-gray-300 text-center mb-6">
          Menga quyidagi manzillardan yozishingiz mumkin:
        </p>
        <ul className="text-gray-400 text-center space-y-2">
          <li>📧 Email: sardorbek@example.com</li>
          <li>💼 GitHub: <a href="https://github.com/sardorbek" className="text-blue-400 hover:underline">github.com/sardorbek</a></li>
          <li>🔗 LinkedIn: <a href="https://linkedin.com/in/sardorbek" className="text-blue-400 hover:underline">linkedin.com/in/sardorbek</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
