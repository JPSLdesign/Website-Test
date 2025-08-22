import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl tracking-tight mb-4">ZENSEI</h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Cultivating serenity through the ancient art of bonsai. 
              Each tree is a meditation, a living sculpture that brings 
              peace to your space.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Indoor Bonsai</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Outdoor Bonsai</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tools & Accessories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Care Products</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ZENSEI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}