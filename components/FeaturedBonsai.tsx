import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const featuredBonsai = [
  {
    id: 1,
    name: "Elegant Ficus",
    price: "$89",
    image: "https://images.unsplash.com/photo-1586440038776-0ce67a1f8334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib25zYWklMjB0cmVlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTU4MDI2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Perfect for beginners, this hardy ficus brings calm to any room."
  },
  {
    id: 2,
    name: "Serene Pine",
    price: "$124",
    image: "https://images.unsplash.com/photo-1511881346740-60bcc5769e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJvbnNhaSUyMHBsYW50fGVufDF8fHx8MTc1NTgwMjY1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A classic choice with elegant needle foliage and graceful form."
  },
  {
    id: 3,
    name: "Majestic Juniper",
    price: "$156",
    image: "https://images.unsplash.com/photo-1652930653661-7d6b1774c183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5pcGVyJTIwYm9uc2FpJTIwdHJlZXxlbnwxfHx8fDE3NTU4MDI2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Outdoor beauty with stunning twisted trunk and dense foliage."
  },
  {
    id: 4,
    name: "Autumn Maple",
    price: "$198",
    image: "https://images.unsplash.com/photo-1753421537411-1d91510d5e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXBsZSUyMGJvbnNhaSUyMHJlZHxlbnwxfHx8fDE3NTU4MDI2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Vibrant seasonal colors make this maple a year-round showpiece."
  }
];

export function FeaturedBonsai() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked specimens from our master cultivators, each bonsai tells 
            a unique story of patience, artistry, and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBonsai.map((bonsai) => (
            <Card key={bonsai.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={bonsai.image}
                  alt={bonsai.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg">{bonsai.name}</h3>
                  <span className="text-lg">{bonsai.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {bonsai.description}
                </p>
                <Button className="w-full" variant="outline">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}