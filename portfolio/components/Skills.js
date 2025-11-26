function Skills() {
  try {
    const skills = [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 98 },
      { name: 'Node.js', level: 85 },
      { name: 'UI/UX Design', level: 88 },
      { name: 'Tailwind CSS', level: 92 }
    ];

    return (
      <section 
        id="skills"
        className="py-20 bg-[var(--bg-light)]"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map(skill => (
              <div key={skill.name} className="bg-[var(--bg-white)] p-6 rounded-xl shadow-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-[var(--primary-color)] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-[var(--bg-light)] rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-bg rounded-full transition-all duration-1000 shadow-lg"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
