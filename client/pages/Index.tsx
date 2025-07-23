import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Trophy, Clock } from "lucide-react";

export default function Index() {
  const categories = [
    {
      name: "Tees",
      href: "/categories/tees",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      functional: true
    },
    {
      name: "Jackets", 
      href: "/categories/jackets",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      functional: false
    },
    {
      name: "Caps",
      href: "/categories/caps", 
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop",
      functional: false
    },
    {
      name: "Accessories",
      href: "/categories/accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      functional: false
    },
    {
      name: "Limited",
      href: "/categories/limited",
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc8b6ff1?w=400&h=500&fit=crop",
      functional: false
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-racing-yellow mr-3" />
            <span className="text-racing-yellow font-mono text-sm tracking-wider">
              PRECISION • SPEED • STYLE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            BORN FOR
            <span className="block bg-gradient-to-r from-racing-red to-racing-yellow bg-clip-text text-transparent">
              VICTORY
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            F1-inspired streetwear for those who live life in the fast lane. 
            Every stitch engineered for performance, every design crafted for champions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-racing-red hover:bg-racing-red/90 text-white font-semibold px-8 py-3 text-lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-racing-white text-white hover:bg-racing-white hover:text-racing-black font-semibold px-8 py-3 text-lg"
            >
              Racing Collection
            </Button>
          </div>
        </div>
        
        {/* Racing elements */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-racing-red via-racing-white to-racing-red opacity-80" />
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-racing-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Engineered for speed with performance fabrics that move with you
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="w-12 h-12 text-racing-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">Championship Quality</h3>
              <p className="text-muted-foreground">
                Premium materials tested by racing professionals worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-racing-silver" />
              </div>
              <h3 className="text-xl font-bold mb-2">Timeless Design</h3>
              <p className="text-muted-foreground">
                Classic racing aesthetics that never go out of style
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">
              RACE-READY CATEGORIES
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From track to street, discover our complete lineup of performance gear
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="group">
                <Link 
                  to={category.functional ? category.href : "/placeholder"}
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-lg bg-card border border-border">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {category.name}
                      </h3>
                      {!category.functional && (
                        <span className="text-xs text-racing-yellow font-mono">
                          COMING SOON
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="w-8 h-8 rounded-full bg-racing-red/20 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-racing-red" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-racing-red to-racing-yellow">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-6">
            JOIN THE VELOCITY CREW
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive access to limited drops and racing insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-racing-red hover:bg-white/90 font-semibold px-8"
              >
                Sign Up Now
              </Button>
            </Link>
            <Link to="/products">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-racing-red font-semibold px-8"
              >
                Shop Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
