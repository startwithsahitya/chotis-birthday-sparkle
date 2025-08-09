const MessageSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-background via-primary-light/20 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-poppins text-3xl sm:text-5xl font-bold mb-12 text-gradient-love animate-slide-up">
          A Message From Your Favorite Brother 💕
        </h2>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl animate-fade-in">
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed">
            <p className="text-primary font-medium">
              Dear Chotiii Devii,
            </p>
            
            <p className="text-foreground">
              On this special day, I want you to know how incredibly blessed I feel to have you as my sister. 
              You bring so much joy, laughter, and love into everyone's life, and today is all about celebrating 
              the amazing person you are! 🌟
            </p>

            <p className="text-foreground">
              From our childhood mischief to our grown-up adventures, every moment with you has been a treasure. 
              Your smile can light up the darkest room, and your heart is pure gold. You're not just my sister; 
              you're my friend, my partner in crime, and my favorite person to annoy! 😄
            </p>

            <p className="text-foreground">
              I hope this new year of your life brings you endless happiness, success in everything you dream of, 
              and all the love your beautiful heart can hold. Remember, no matter where life takes us, 
              I'll always be here cheering you on! 💪
            </p>

            <p className="text-primary font-medium">
              Happy Birthday, my dear sister! May all your wishes come true! ✨🎂🎈
            </p>

            <div className="flex justify-center items-center space-x-2 mt-8">
              <span className="text-2xl animate-pulse-heart">❤️</span>
              <p className="text-accent font-semibold">With all my love,</p>
              <span className="text-2xl animate-pulse-heart">❤️</span>
            </div>
            
            <p className="text-primary font-bold text-xl">
              Your Amazing Brother
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mt-8">
          <span className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🎁</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌸</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🦋</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: '1.5s' }}>✨</span>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;