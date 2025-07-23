import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/contexts/WishlistContext";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";
import { Star, Search, ShoppingCart, Heart, Minus, Plus, Truck, Shield, RotateCcw, Share2, Facebook, Twitter, Copy } from "lucide-react";

const allProducts = [
  {
    id: 1,
    name: "Monaco GP Racing Tee",
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=750&fit=crop"
    ],
    colors: ["Black", "Red", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Inspired by the legendary Monaco Grand Prix, this premium tee combines racing heritage with street-ready style. Crafted from moisture-wicking performance fabric.",
    category: "tees",
    badge: "BESTSELLER"
  },
  {
    id: 2, 
    name: "Silverstone Circuit Tee",
    price: 42,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=600&h=750&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop"
    ],
    colors: ["Navy", "Grey", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Home of British motorsport excellence. This tee celebrates the iconic Silverstone circuit with a modern racing-inspired design.",
    category: "tees",
    badge: null
  },
  {
    id: 3,
    name: "Speed Demon Vintage Tee", 
    price: 38,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=750&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=600&h=750&fit=crop"
    ],
    colors: ["White", "Black", "Red"],
    sizes: ["S", "M", "L", "XL"],
    description: "Vintage-inspired design celebrating the golden era of Formula 1 racing. Perfect for both track days and casual wear.",
    category: "tees",
    badge: "LIMITED"
  },
  {
    id: 4,
    name: "Racing Windbreaker Jacket",
    price: 89,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop"
    ],
    colors: ["Black", "Red", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Professional-grade windbreaker designed for the paddock and street. Water-resistant with racing-inspired graphics.",
    category: "jackets",
    badge: null
  },
  {
    id: 5,
    name: "Pit Crew Cap",
    price: 28,
    rating: 4.5,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=750&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=750&fit=crop"
    ],
    colors: ["Black", "Red", "White"],
    sizes: ["One Size"],
    description: "Official pit crew style cap with adjustable strap and embroidered racing logos.",
    category: "caps",
    badge: null
  }
];

export default function Product() {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const currentProduct = allProducts.find(p => p.id === parseInt(id || "1"));
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToRecentlyViewed } = useRecentlyViewed();

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return allProducts;
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Add to recently viewed when product loads
  useEffect(() => {
    if (currentProduct) {
      addToRecentlyViewed({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        viewedAt: new Date().toISOString()
      });
    }
  }, [currentProduct, addToRecentlyViewed]);

  const handleWishlistToggle = () => {
    if (!currentProduct) return;

    if (isInWishlist(currentProduct.id)) {
      removeFromWishlist(currentProduct.id);
    } else {
      addToWishlist({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        addedAt: new Date().toISOString()
      });
    }
  };

  const shareProduct = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this F1-inspired ${currentProduct?.name} from Velocity Racing!`;

    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
  };

  if (!currentProduct) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/categories/tees">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-racing-red">Home</Link>
            <span>/</span>
            <Link to="/categories/tees" className="hover:text-racing-red">Tees</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{currentProduct.name}</span>
          </nav>

          {/* Search Section */}
          <div className="mb-12">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {searchQuery && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                Search Results for "{searchQuery}"
              </h2>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search terms or browse our categories
                  </p>
                  <Button onClick={() => setSearchQuery("")} variant="outline">
                    Clear Search
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                      <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{product.name}</h3>
                          <p className="text-lg font-bold">${product.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold mb-4">Current Product</h3>
              </div>
            </div>
          )}

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4">
                <img
                  src={currentProduct.gallery[selectedImage]}
                  alt={currentProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {currentProduct.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-racing-red' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${currentProduct.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {currentProduct.badge && (
                  <Badge variant={currentProduct.badge === 'BESTSELLER' ? 'destructive' : 'secondary'}>
                    {currentProduct.badge}
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-black text-foreground mb-4">
                {currentProduct.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(currentProduct.rating) ? 'fill-racing-yellow text-racing-yellow' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium">{currentProduct.rating}</span>
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  ({currentProduct.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  ${currentProduct.price}
                </span>
                {currentProduct.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${currentProduct.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-6">
                {currentProduct.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Color</h3>
                <div className="flex items-center space-x-3">
                  {currentProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-racing-red scale-110' : 'border-gray-300'
                      } ${
                        color === 'Black' ? 'bg-black' :
                        color === 'White' ? 'bg-white' :
                        color === 'Red' ? 'bg-racing-red' :
                        color === 'Navy' ? 'bg-blue-900' :
                        color === 'Grey' ? 'bg-gray-500' :
                        'bg-gray-300'
                      } transition-all`}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="grid grid-cols-6 gap-2">
                  {currentProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-racing-red bg-racing-red text-white'
                          : 'border-border hover:border-racing-red'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4 mb-8">
                <Button size="lg" className="w-full bg-racing-red hover:bg-racing-red/90">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart - ${currentProduct.price * quantity}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={handleWishlistToggle}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isInWishlist(currentProduct.id) ? 'fill-racing-red text-racing-red' : ''}`} />
                  {isInWishlist(currentProduct.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>

                {/* Social Sharing */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium flex items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share:
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareProduct('facebook')}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareProduct('twitter')}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareProduct('copy')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 text-racing-red mr-2" />
                  Free shipping on orders over $75
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-4 w-4 text-racing-red mr-2" />
                  30-day free returns
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-racing-red mr-2" />
                  2-year warranty included
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
