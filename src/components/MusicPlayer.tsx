import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play attempt (will work if user has interacted with the page)
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Auto-play prevented by browser");
      }
    };

    // Delay to let the page load
    const timer = setTimeout(playAudio, 2000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Playback failed");
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        {/* Placeholder for birthday music - users can replace with their own */}
        <source src="/birthday-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Controls */}
      <div className="flex space-x-2">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="music-control group"
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
          ) : (
            <Play className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
          )}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="music-control group"
          title={isMuted ? 'Unmute Music' : 'Mute Music'}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
          ) : (
            <Volume2 className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
          )}
        </button>
      </div>

      {/* Music Note Animation */}
      {isPlaying && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-2xl">🎵</div>
        </div>
      )}

      {/* Subtle Background Indicator */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse opacity-50 -z-10"></div>
    </div>
  );
};

export default MusicPlayer;