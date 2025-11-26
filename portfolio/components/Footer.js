function Footer() {
  try {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer 
        className="bg-gray-900 text-white py-12 relative overflow-hidden"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary-color)] rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--accent-color)] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">BM</h3>
              <p className="text-gray-400">
                Web Developer & Designer creating beautiful digital experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="icon-mail text-lg"></div>
                  <span>brendamukami04@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="icon-phone text-lg"></div>
                  <span>+254 797 730 698</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="icon-map-pin text-lg"></div>
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2025 Brenda Mukami. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors">
                  <div className="icon-github text-2xl"></div>
                </a>
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors">
                  <div className="icon-linkedin text-2xl"></div>
                </a>
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors">
                  <div className="icon-twitter text-2xl"></div>
                </a>
                <a href="mailto:brendamukami04@gmail.com" className="hover:text-[var(--primary-color)] transition-colors">
                  <div className="icon-mail text-2xl"></div>
                </a>
              </div>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
              >
                <div className="icon-arrow-up text-lg text-white"></div>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
