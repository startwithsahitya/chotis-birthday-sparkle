import { useState } from "react";

const Footer = () => {
  const [heartPulse, setHeartPulse] = useState(false);

  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-primary-light/50 to-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Footer Message */}
        <div className="mb-8">
          <p className="text-lg sm:text-xl font-medium text-foreground mb-4">
            Hope your special day is filled with all the happiness you deserve!
            🌟
          </p>
          <p className="text-sm text-muted-foreground">
            May this year bring you countless blessings and beautiful moments!
            ✨
          </p>
        </div>

        {/* Heart with Brother Attribution */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-lg text-muted-foreground">Made with</span>

          <button
            onMouseEnter={() => setHeartPulse(true)}
            onMouseLeave={() => setHeartPulse(false)}
            className="focus:outline-none"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`text-accent transition-all duration-300 ${
                heartPulse ? "animate-pulse-heart scale-125" : ""
              }`}
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                fill="currentColor"
              />
            </svg>
          </button>

          <span className="text-lg text-muted-foreground">by your</span>
          <span className="text-lg font-semibold text-primary">
            amazing brother
          </span>
        </div>

        {/* Birthday Wishes */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block mb-6">
          <p className="text-primary font-medium">
            🎉 Wishing you the happiest birthday ever! 🎂
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-6 mb-6">
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            🎈
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0.3s" }}
          >
            🌟
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0.6s" }}
          >
            🎁
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0.9s" }}
          >
            🦋
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "1.2s" }}
          >
            🌸
          </span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          <p>• A birthday surprise made with love</p>
          <p className="mt-1">
            🎂 Every sister deserves to feel this special 💕
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <p className="text-lg font-medium text-gradient-love">
            Now go make a wish and blow out those candles! 🕯️✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
