function Hero() {
  try {
    return (
      <section 
        id="home"
        className="min-h-screen flex items-center justify-center bg-[var(--bg-white)] pt-20 relative overflow-hidden"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary-color)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-[var(--primary-color)]">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_183933f0a0000001/8fb7d76f-c1b6-4429-a507-c37b210d6a43.jpeg" 
                alt="Brenda Mukami"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Bree</span>
          </h1>
          <p className="text-2xl text-[var(--text-light)] mb-8">
            Software Developer & Machine Learning Enthusiast
          </p>
          <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto mb-12">
            Building smart, reliable, and user-centered digital solutions through backend engineering, 
            data analytics, and AI-driven applications.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
