import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { ShoppingCart, Star, Heart, Package, ArrowRight } from "lucide-react";

export default function Products() {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  // Featured products from all categories
  const featuredProducts = [
    // Tees
    {
      id: 1,
      name: "Monaco GP Racing Tee",
      price: 45,
      originalPrice: 60,
      rating: 4.8,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      category: "tees",
      badge: "BESTSELLER",
      inventory: 23
    },
    // Jackets
    {
      id: 101,
      name: "Monaco GP Racing Windbreaker",
      price: 89,
      originalPrice: 115,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      category: "jackets",
      badge: "BESTSELLER",
      inventory: 23
    },
    // Caps
    {
      id: 201,
      name: "Monaco GP Snapback",
      price: 35,
      originalPrice: 45,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop",
      category: "caps",
      badge: "BESTSELLER",
      inventory: 67
    },
    // Accessories
    {
      id: 301,
      name: "Monaco GP Racing Watch",
      price: 189,
      originalPrice: 249,
      rating: 4.9,
      reviews: 187,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop",
      category: "accessories",
      badge: "PREMIUM",
      inventory: 23
    },
    // More Tees
    {
      id: 3,
      name: "Speed Demon Vintage Tee",
      price: 38,
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop",
      category: "tees",
      badge: "LIMITED",
      inventory: 8
    },
    // More Jackets
    {
      id: 104,
      name: "Podium Victory Bomber",
      price: 149,
      originalPrice: 189,
      rating: 4.9,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
      category: "jackets",
      badge: "PREMIUM",
      inventory: 8
    },
    // More Caps
    {
      id: 202,
      name: "F1 Championship Fitted Cap",
      price: 42,
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop",
      category: "caps",
      badge: "LIMITED",
      inventory: 23
    },
    // More Accessories
    {
      id: 303,
      name: "Speed Demon Sunglasses",
      price: 78,
      originalPrice: 98,
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop",
      category: "accessories",
      badge: "LIMITED",
      inventory: 34
    }
  ];

  const categories = [
    {
      name: "Racing Tees",
      slug: "tees",
      description: "Premium F1-inspired streetwear",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
      productCount: 6
    },
    {
      name: "Racing Jackets", 
      slug: "jackets",
      description: "Performance outerwear for champions",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop",
      productCount: 8
    },
    {
      name: "Racing Caps",
      slug: "caps", 
      description: "Complete your racing look",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=400&fit=crop",
      productCount: 10
    },
    {
      name: "Racing Accessories",
      slug: "accessories",
      description: "Professional gear & collectibles", 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      productCount: 12
    }
  ];

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-foreground mb-4">
              ALL PRODUCTS
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of F1-inspired streetwear and accessories. 
              From track to street, gear up for victory.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category) => (
              <Link key={category.slug} to={`/categories/${category.slug}`}>
                <div className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-racing-red/50">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/80 mb-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-racing-yellow font-semibold">
                          {category.productCount} Products
                        </span>
                        <ArrowRight className="h-4 w-4 text-racing-red" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Products */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-foreground mb-4">
                FEATURED PRODUCTS
              </h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked favorites from our racing collection
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
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
                              product.badge === 'PREMIUM' ? 'bg-purple-600 text-white' :
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
                            ({product.reviews})
                          </span>
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
          </div>

          {/* Browse by Category CTA */}
          <div className="bg-gradient-to-r from-racing-red to-racing-yellow rounded-lg p-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              EXPLORE BY CATEGORY
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Dive deeper into our specialized collections. Each category features expertly curated products for the ultimate racing lifestyle.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link key={category.slug} to={`/categories/${category.slug}`}>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full bg-white text-racing-red hover:bg-white/90"
                  >
                    {category.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
