const MemoriesTimeline = () => {
  const memories = [
    {
      year: "Childhood",
      title: "The Beginning of Our Adventure",
      description: "When you first came into this world and made me the proudest big brother ever! 👶✨",
      emoji: "🍼"
    },
    {
      year: "Growing Up",
      title: "Partners in Mischief",
      description: "All those times we got into trouble together (and blamed each other)! Those were the days! 😈",
      emoji: "🤝"
    },
    {
      year: "School Days",
      title: "Academic Superstar",
      description: "Watching you excel in everything you touched and making the family so proud! 🌟",
      emoji: "📚"
    },
    {
      year: "Today",
      title: "The Amazing Woman You've Become",
      description: "Seeing you grow into this incredible, strong, and beautiful person fills my heart with joy! 💖",
      emoji: "👑"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary-light/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-center mb-16 text-gradient-hero animate-slide-up">
          Our Journey Together 🛤️
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden sm:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {memories.map((memory, index) => (
              <div 
                key={index} 
                className={`relative animate-slide-up flex items-start ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden sm:block absolute left-6 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'sm:ml-20' : 'sm:mr-20'
                } w-full sm:w-96`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">{memory.emoji}</span>
                    <div>
                      <h3 className="font-poppins text-xl font-bold text-primary">{memory.year}</h3>
                      <h4 className="font-semibold text-foreground">{memory.title}</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Dreams */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="font-poppins text-2xl font-bold text-gradient-love mb-4">
            And Many More Beautiful Memories to Come! 🌈
          </h3>
          <p className="text-lg text-muted-foreground">
            Here's to more adventures, more laughter, and more precious moments together! 🥂
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoriesTimeline;