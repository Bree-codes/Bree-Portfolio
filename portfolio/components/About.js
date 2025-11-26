function About() {
  try {
    return (
      <section 
        id="about"
        className="py-20 bg-[var(--bg-light)]"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-[var(--text-light)]">
                I'm a passionate and versatile Software Developer and Machine Learning Enthusiast focused on building 
                smart, reliable, and user-centered digital solutions. I specialize in backend engineering, data analytics, 
                and AI-driven applications, with a strong curiosity for how technology can create meaningful impact.
              </p>
              <p className="text-lg text-[var(--text-light)]">
                I enjoy transforming ideas into fully functional products—whether it's developing modern web applications 
                with Spring Boot, analyzing datasets with Python, or working through end-to-end machine learning workflows. 
                My approach blends clean architecture, thoughtful design, and well-documented code to deliver solutions 
                that are both efficient and scalable.
              </p>
              <p className="text-lg text-[var(--text-light)]">
                Beyond technology, I'm strongly drawn to entrepreneurship. I aspire to build my own company one day, 
                driven by creativity, independence, and a desire to turn innovative ideas into real-world products. 
                I believe in taking initiative, thinking boldly, and shaping my own path as both a developer and a future founder.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 bg-[var(--bg-white)] rounded-lg flex items-center justify-center text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors shadow-md">
                  <div className="icon-github text-xl"></div>
                </a>
                <a href="#" className="w-12 h-12 bg-[var(--bg-white)] rounded-lg flex items-center justify-center text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors shadow-md">
                  <div className="icon-linkedin text-xl"></div>
                </a>
                <a href="#" className="w-12 h-12 bg-[var(--bg-white)] rounded-lg flex items-center justify-center text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors shadow-md">
                  <div className="icon-twitter text-xl"></div>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'server', label: 'Backend Engineering', desc: 'Scalable server solutions' },
                { icon: 'brain', label: 'Machine Learning', desc: 'AI-driven applications' },
                { icon: 'chart-bar', label: 'Data Analytics', desc: 'Insightful data analysis' },
                { icon: 'rocket', label: 'Entrepreneurship', desc: 'Building innovative products' }
              ].map(item => (
                <div key={item.label} className="p-6 bg-[var(--bg-white)] rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <div className={`icon-${item.icon} text-xl text-white`}></div>
                  </div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-[var(--text-light)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}