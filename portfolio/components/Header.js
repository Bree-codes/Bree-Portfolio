function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      }

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsDark(false);
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDark(true);
      }
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[var(--bg-white)] shadow-md' : 'bg-transparent'
        }`}
        data-name="header"
        data-file="components/Header.js"
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">BM</div>
          <div className="flex items-center gap-8">
            <ul className="flex gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-[var(--bg-light)] hover:bg-[var(--primary-color)] hover:text-white transition-colors"
            >
              <div className={`${isDark ? 'icon-sun' : 'icon-moon'} text-xl`}></div>
            </button>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
