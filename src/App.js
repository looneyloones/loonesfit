import { Link } from "react-router-dom";

export default function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: 'url("/images/jungle-gym-6509044_1920.jpg")' }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content container (above overlay) */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        {/* Top Logo */}
        <header className="p-6">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-white text-center px-6 py-12 md:py-20 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-10 leading-tight drop-shadow-lg">
            Which of These Areas Are You Most Interested In?
          </h1>
          <Link
            to="/apply"
            className="bg-white text-black px-8 py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition"
            aria-label="Go to Fitness and Mindset Coaching Application"
          >
            Fitness & Mindset Coaching
          </Link>
        </main>

        {/* Footer */}
        <footer className="p-6 flex flex-col items-center text-white text-opacity-80 text-sm md:text-base">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mb-2" />
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
