import { Layout } from "@/components/Layout";
import { RacingCalendar } from "@/components/RacingCalendar";
import { PitCrewDashboard } from "@/components/PitCrewDashboard";
import { useWishlist } from "@/contexts/WishlistContext";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Eye, Calendar, Trophy, ArrowRight } from "lucide-react";

export default function Dashboard() {
  const { wishlistItems } = useWishlist();
  const { recentlyViewed } = useRecentlyViewed();

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black text-foreground mb-2">
              Racing Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Your F1 headquarters for gear, races, and rewards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Racing Calendar */}
            <div>
              <RacingCalendar />
            </div>

            {/* Pit Crew Loyalty Program */}
            <div>
              <PitCrewDashboard />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card border rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-racing-red mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{wishlistItems.length}</div>
              <div className="text-sm text-muted-foreground">Wishlist Items</div>
            </div>
            
            <div className="bg-card border rounded-lg p-4 text-center">
              <Eye className="h-8 w-8 text-racing-yellow mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{recentlyViewed.length}</div>
              <div className="text-sm text-muted-foreground">Recently Viewed</div>
            </div>
            
            <div className="bg-card border rounded-lg p-4 text-center">
              <Calendar className="h-8 w-8 text-racing-silver mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">6</div>
              <div className="text-sm text-muted-foreground">Upcoming Races</div>
            </div>
            
            <div className="bg-card border rounded-lg p-4 text-center">
              <Trophy className="h-8 w-8 text-racing-red mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">847</div>
              <div className="text-sm text-muted-foreground">Pit Crew Points</div>
            </div>
          </div>

          {/* Wishlist Items */}
          {wishlistItems.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <Heart className="h-6 w-6 text-racing-red mr-2" />
                  Your Wishlist
                </h2>
                <Link to="/wishlist">
                  <Button variant="outline" size="sm">
                    View All <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {wishlistItems.slice(0, 4).map((item) => (
                  <Link key={item.id} to={`/product/${item.id}`}>
                    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h3 className="font-semibold text-sm mb-1 truncate">{item.name}</h3>
                        <p className="text-racing-red font-bold">${item.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Recently Viewed */}
          {recentlyViewed.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <Eye className="h-6 w-6 text-racing-yellow mr-2" />
                  Recently Viewed
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recentlyViewed.slice(0, 4).map((item) => (
                  <Link key={item.id} to={`/product/${item.id}`}>
                    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h3 className="font-semibold text-sm mb-1 truncate">{item.name}</h3>
                        <p className="text-racing-red font-bold">${item.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-racing-red to-racing-yellow rounded-lg p-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to Race?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Discover the latest F1-inspired streetwear and gear up for the next Grand Prix
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/categories/tees">
                <Button size="lg" variant="secondary" className="bg-white text-racing-red hover:bg-white/90">
                  Shop New Arrivals
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-racing-red">
                  Browse All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
