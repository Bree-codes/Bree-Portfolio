function Projects() {
  try {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with payment integration and inventory management.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        tags: ['React', 'Node.js', 'MongoDB']
      },
      {
        title: 'Task Management App',
        description: 'A collaborative productivity tool for teams to organize and track projects.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        tags: ['React', 'Firebase', 'Tailwind']
      },
      {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio site for a creative agency.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        tags: ['HTML', 'CSS', 'JavaScript']
      }
    ];

    return (
      <section 
        id="projects"
        className="py-20 bg-[var(--bg-white)]"
        data-name="projects"
        data-file="components/Projects.js"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[var(--bg-light)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[var(--text-light)] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[var(--secondary-color)] text-[var(--primary-color)] text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}