import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { ShoppingCart, Star, Heart, Package } from "lucide-react";

export default function CategoryTees() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const products = [
    {
      id: 1,
      name: "Monaco GP Racing Tee",
      price: 45,
      originalPrice: 60,
      rating: 4.8,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      colors: ["Black", "Red", "White"],
      badge: "BESTSELLER",
      inventory: 23
    },
    {
      id: 2,
      name: "Silverstone Circuit Tee",
      price: 42,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=400&h=500&fit=crop",
      colors: ["Navy", "Grey", "Black"],
      badge: null,
      inventory: 47
    },
    {
      id: 3,
      name: "Speed Demon Vintage Tee",
      price: 38,
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop",
      colors: ["White", "Black", "Red"],
      badge: "LIMITED",
      inventory: 8
    },
    {
      id: 4,
      name: "Podium Champion Tee",
      price: 48,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=500&fit=crop",
      colors: ["Gold", "Black", "White"],
      badge: null,
      inventory: 32
    },
    {
      id: 5,
      name: "Track Day Essential Tee",
      price: 35,
      rating: 4.5,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
      colors: ["Black", "Navy", "Grey"],
      badge: null,
      inventory: 15
    },
    {
      id: 6,
      name: "Victory Lap Signature Tee",
      price: 52,
      originalPrice: 65,
      rating: 4.9,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
      colors: ["Red", "Black", "White"],
      badge: "NEW",
      inventory: 3
    },
    {
      id: 7,
      name: "Silverstone Heritage Tee",
      price: 40,
      rating: 4.6,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
      colors: ["Green", "White", "Black"],
      badge: null,
      inventory: 28
    },
    {
      id: 8,
      name: "F1 Legends Racing Tee",
      price: 36,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
      colors: ["Black", "Navy", "Red"],
      badge: null,
      inventory: 54
    },
    {
      id: 9,
      name: "Grid Position Vintage Tee",
      price: 33,
      originalPrice: 45,
      rating: 4.5,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop",
      colors: ["Vintage Black", "Faded Navy", "Worn Grey"],
      badge: "SALE",
      inventory: 41
    },
    {
      id: 10,
      name: "Championship Winner Tee",
      price: 48,
      rating: 4.8,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      colors: ["Gold", "Silver", "Black"],
      badge: "EXCLUSIVE",
      inventory: 16
    },
    {
      id: 11,
      name: "Pit Stop Performance Tee",
      price: 44,
      rating: 4.7,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=400&h=500&fit=crop",
      colors: ["Red", "Blue", "Black"],
      badge: "TECHNICAL",
      inventory: 37
    },
    {
      id: 12,
      name: "Racing Dynasty Tee",
      price: 39,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=500&fit=crop",
      colors: ["Navy", "Maroon", "Black"],
      badge: null,
      inventory: 62
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-racing-red">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Tees</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-foreground mb-4">
            RACING TEES
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Premium F1-inspired tees engineered for comfort and style. 
            From track-tested performance to street-ready classics.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="text-sm text-muted-foreground">
            Showing {products.length} products
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-background border border-border rounded-md px-3 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-racing-red/50">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-bold rounded ${
                          product.badge === 'BESTSELLER' ? 'bg-racing-red text-white' :
                          product.badge === 'LIMITED' ? 'bg-racing-yellow text-black' :
                          'bg-racing-carbon text-white'
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="bg-white/90 text-racing-black hover:bg-white p-2"
                        onClick={(e) => {
                          e.preventDefault();
                          const wishlistItem = {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            addedAt: new Date().toISOString()
                          };
                          if (isInWishlist(product.id)) {
                            removeFromWishlist(product.id);
                          } else {
                            addToWishlist(wishlistItem);
                          }
                        }}
                      >
                        <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-racing-red text-racing-red' : ''}`} />
                      </Button>
                      <Button size="sm" className="bg-white text-racing-black hover:bg-white/90 p-2">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-racing-red transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-racing-yellow text-racing-yellow" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border border-border ${
                            color === 'Black' ? 'bg-black' :
                            color === 'White' ? 'bg-white' :
                            color === 'Red' ? 'bg-racing-red' :
                            color === 'Navy' ? 'bg-blue-900' :
                            color === 'Grey' ? 'bg-gray-500' :
                            color === 'Gold' ? 'bg-yellow-500' :
                            'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-foreground">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Inventory Counter */}
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Package className="h-3 w-3 mr-1" />
                      <span className={`${product.inventory < 10 ? 'text-racing-red font-semibold' : ''}`}>
                        {product.inventory < 10 ? `Only ${product.inventory} left!` : `${product.inventory} in stock`}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}
