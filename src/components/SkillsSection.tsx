import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillsCategories = {
    languagesFrameworks: {
      title: 'Languages & Frameworks',
      skills: [
        'Python', 'SQL', 'Scikit-learn', 'TensorFlow', 'PyTorch', 
        'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'FastAPI'
      ]
    },
    toolsPlatforms: {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Power BI', 'Tableau']
    },
    database: {
      title: 'Database',
      skills: ['MySQL', 'SQLite']
    },
    softSkills: {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Analytical Thinking', 'Communication', 'Research Mindset', 'Team Collaboration']
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning data science, machine learning, and modern development tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {Object.entries(skillsCategories).map(([categoryKey, category], categoryIndex) => (
            <div key={categoryKey} className={`animate-fade-in-up`} style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-surface to-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm">
                <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-center text-gradient-primary">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group relative p-2 sm:p-3 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-lg hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 text-[10px] sm:text-xs font-medium text-foreground text-center block leading-tight">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Skills Overview Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gradient-primary">10+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">ML Frameworks</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-primary/20"></div>
            <div className="block sm:hidden w-full h-px bg-primary/20"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gradient-primary">5+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Analytics Tools</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-primary/20"></div>
            <div className="block sm:hidden w-full h-px bg-primary/20"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gradient-primary">2+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Database Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;