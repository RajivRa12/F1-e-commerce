import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Flag, Heart, Bell, GitCompare, History, HelpCircle, Gift } from "lucide-react";
import { Button } from "./ui/button";
import { useWishlist } from "@/contexts/WishlistContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { wishlistCount } = useWishlist();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Flag className="h-8 w-8 text-racing-red" />
              <span className="text-2xl font-bold bg-gradient-to-r from-racing-red to-racing-yellow bg-clip-text text-transparent">
                VELOCITY
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/products" 
                className="text-foreground hover:text-racing-red transition-colors font-medium"
              >
                Shop
              </Link>
              <Link 
                to="/categories/tees" 
                className="text-foreground hover:text-racing-red transition-colors font-medium"
              >
                Tees
              </Link>
              <Link 
                to="/categories/jackets" 
                className="text-muted-foreground hover:text-racing-red transition-colors font-medium"
              >
                Jackets
              </Link>
              <Link 
                to="/categories/caps" 
                className="text-muted-foreground hover:text-racing-red transition-colors font-medium"
              >
                Caps
              </Link>
              <Link 
                to="/categories/accessories" 
                className="text-muted-foreground hover:text-racing-red transition-colors font-medium"
              >
                Accessories
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <Button variant="ghost" size="icon" className="hidden lg:flex" title="Search Products">
                <Search className="h-5 w-5" />
              </Button>

              {/* Compare Products */}
              <Button variant="ghost" size="icon" className="hidden lg:flex" title="Compare Products">
                <GitCompare className="h-5 w-5" />
              </Button>

              {/* Recently Viewed */}
              <Button variant="ghost" size="icon" className="hidden md:flex" title="Recently Viewed">
                <History className="h-5 w-5" />
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative hidden md:flex" title="Notifications">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-racing-yellow text-xs text-racing-black flex items-center justify-center">
                  2
                </span>
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="relative" title="Wishlist">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-racing-red text-xs text-white flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>

              {/* Profile/Login */}
              <Link to="/login">
                <Button variant="ghost" size="icon" title="Account">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              {/* Cart */}
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative" title="Shopping Cart">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-racing-red text-xs text-white flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-card mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Flag className="h-6 w-6 text-racing-red" />
                <span className="text-xl font-bold bg-gradient-to-r from-racing-red to-racing-yellow bg-clip-text text-transparent">
                  VELOCITY
                </span>
              </Link>
              <p className="text-muted-foreground text-sm mb-4">
                F1-inspired streetwear for the speed-obsessed. Join the racing community.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="text-xs">
                  <Gift className="h-3 w-3 mr-1" />
                  Refer & Earn
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <HelpCircle className="h-3 w-3 mr-1" />
                  Size Guide
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/categories/tees" className="text-muted-foreground hover:text-racing-red">Racing Tees</Link></li>
                <li><Link to="/categories/jackets" className="text-muted-foreground hover:text-racing-red">Performance Jackets</Link></li>
                <li><Link to="/categories/caps" className="text-muted-foreground hover:text-racing-red">Racing Caps</Link></li>
                <li><Link to="/categories/accessories" className="text-muted-foreground hover:text-racing-red">Accessories</Link></li>
                <li><Link to="/categories/limited" className="text-muted-foreground hover:text-racing-red">Limited Edition</Link></li>
                <li><Link to="/gift-cards" className="text-muted-foreground hover:text-racing-red">Gift Cards</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Account</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/login" className="text-muted-foreground hover:text-racing-red">Sign In</Link></li>
                <li><Link to="/signup" className="text-muted-foreground hover:text-racing-red">Create Account</Link></li>
                <li><Link to="/order-history" className="text-muted-foreground hover:text-racing-red">Order History</Link></li>
                <li><Link to="/track-orders" className="text-muted-foreground hover:text-racing-red">Track Orders</Link></li>
                <li><Link to="/pit-crew-rewards" className="text-muted-foreground hover:text-racing-red">Pit Crew Rewards</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/help-center" className="text-muted-foreground hover:text-racing-red">Help Center</Link></li>
                <li><Link to="/size-guide" className="text-muted-foreground hover:text-racing-red">Size Guide</Link></li>
                <li><Link to="/shipping-info" className="text-muted-foreground hover:text-racing-red">Shipping Info</Link></li>
                <li><Link to="/returns" className="text-muted-foreground hover:text-racing-red">Returns</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-racing-red">Contact Us</Link></li>
                <li><Link to="/live-chat" className="text-muted-foreground hover:text-racing-red">Live Chat</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Racing Hub</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/race-results" className="text-muted-foreground hover:text-racing-red">Race Results</Link></li>
                <li><Link to="/racing-news" className="text-muted-foreground hover:text-racing-red">Racing News</Link></li>
                <li><Link to="/driver-gear" className="text-muted-foreground hover:text-racing-red">Driver Gear</Link></li>
                <li><Link to="/team-collections" className="text-muted-foreground hover:text-racing-red">Team Collections</Link></li>
                <li><Link to="/vip-events" className="text-muted-foreground hover:text-racing-red">VIP Events</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Velocity Racing Streetwear. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
