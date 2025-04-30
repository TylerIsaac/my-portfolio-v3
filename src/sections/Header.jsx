function Header() {
    return (
      <header className="relative overflow-hidden bg-white px-4 py-32">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 pointer-events-none"
          style={{
            backgroundImage: "url('https://i.ibb.co/Hf5CSJTD/green-background-image.png')"
          }}
        />
  
        {/* Foreground content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">Frontend Developer</h1>
          <p className="text-xl text-gray-600 mb-10">
            Building fast, accessible, and user-focused websites with clarity and craft.
          </p>
          <a
            href="#projects"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg hover:bg-green-700 transition duration-300"
          >
            View My Work
          </a>
        </div>
      </header>
    );
  }
  
  export default Header;
  