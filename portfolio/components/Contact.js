function Contact() {
  try {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    };

    const contactInfo = [
      { icon: 'mail', label: 'Email', value: 'brendamukami04@gmail.com', link: 'mailto:brendamukami04@gmail.com' },
      { icon: 'phone', label: 'Phone', value: '+254 797 730 698', link: 'tel:+254797730698' },
      { icon: 'map-pin', label: 'Location', value: 'Nairobi, Kenya', link: '#' }
    ];

    return (
      <section 
        id="contact"
        className="py-20 bg-[var(--bg-light)] relative overflow-hidden"
        data-name="contact"
        data-file="components/Contact.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-color)] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-[var(--bg-white)] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-center"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className={`icon-${item.icon} text-2xl text-white`}></div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.label}</h3>
                <p className="text-[var(--text-light)]">{item.value}</p>
              </a>
            ))}
          </div>

          {submitted ? (
            <div className="bg-[var(--bg-white)] p-8 rounded-2xl text-center shadow-2xl max-w-2xl mx-auto">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <div className="icon-check text-4xl text-white"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
              <p className="text-lg text-[var(--text-light)]">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <div className="bg-[var(--bg-white)] p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[var(--text-dark)]">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-[var(--bg-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[var(--text-dark)]">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[var(--bg-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--text-dark)]">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-[var(--bg-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 gradient-bg text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <div className="icon-send text-xl"></div>
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
