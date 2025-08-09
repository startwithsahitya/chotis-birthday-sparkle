import { useEffect } from 'react';
import HeroBanner from '@/components/HeroBanner';
import PhotoCarousel from '@/components/PhotoCarousel';
import MessageSection from '@/components/MessageSection';
import MemoriesTimeline from '@/components/MemoriesTimeline';
import FloatingHearts from '@/components/FloatingHearts';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add viewport meta for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Music Player */}
      <MusicPlayer />
      
      {/* Hero Section */}
      <HeroBanner />
      
      {/* Photo Gallery */}
      <PhotoCarousel />
      
      {/* Heartfelt Message */}
      <MessageSection />
      
      {/* Memories Timeline */}
      <MemoriesTimeline />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;