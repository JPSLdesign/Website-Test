import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1720887790667-0e123a23c8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGJvbnNhaSUyMGdhcmRlbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc1NTgwMjY1OXww&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Peaceful bonsai garden"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl text-white mb-6 tracking-tight">
            Cultivate Serenity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Discover our curated collection of authentic bonsai trees, 
            each one a living artwork waiting to grace your space.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Explore Collection
          </Button>
        </div>
      </div>
    </section>
  );
}