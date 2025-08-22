import { useState, useRef } from "react";
import { Leaf, Book, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Expert Care Guides",
    description: "Comprehensive guides from master cultivators to help your bonsai thrive for generations."
  },
  {
    icon: Book,
    title: "Ancient Wisdom",
    description: "Learn traditional techniques passed down through centuries of bonsai artistry."
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a passionate community of bonsai enthusiasts sharing knowledge and inspiration."
  },
  {
    icon: Shield,
    title: "Lifetime Support",
    description: "Our commitment doesn't end at purchase. Get ongoing support for your bonsai journey."
  }
];

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shimmerKey, setShimmerKey] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setShimmerKey(prev => prev + 1); // Force re-render to restart animation
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">The ZENSEI Difference</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            More than just bonsai trees, we provide the knowledge and community 
            to nurture your passion for this ancient art form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div 
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <feature.icon className="h-6 w-6 text-primary transition-transform duration-300 ease-in-out" />
              </div>
              <h3 
                key={`${index}-${shimmerKey}`}
                className={`text-lg mb-2 transition-all duration-300 ${
                  hoveredIndex === index ? 'shimmer-text' : ''
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}