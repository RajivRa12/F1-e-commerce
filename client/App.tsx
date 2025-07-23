import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { RecentlyViewedProvider } from "@/contexts/RecentlyViewedContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import CategoryTees from "./pages/CategoryTees";
import CategoryJackets from "./pages/CategoryJackets";
import CategoryCaps from "./pages/CategoryCaps";
import CategoryAccessories from "./pages/CategoryAccessories";
import PlaceholderCategory from "./pages/PlaceholderCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import FeaturePlaceholder from "./pages/FeaturePlaceholder";
import NotFound from "./pages/NotFound";
import GiftCards from "./pages/GiftCards";
import OrderHistory from "./pages/OrderHistory";
import TrackOrders from "./pages/TrackOrders";
import PitCrewRewards from "./pages/PitCrewRewards";
import HelpCenter from "./pages/HelpCenter";
import ShippingInfo from "./pages/ShippingInfo";
import Returns from "./pages/Returns";
import Contact from "./pages/Contact";
import LiveChat from "./pages/LiveChat";
import RaceResults from "./pages/RaceResults";
import RacingNews from "./pages/RacingNews";
import DriverGear from "./pages/DriverGear";
import TeamCollections from "./pages/TeamCollections";
import VipEvents from "./pages/VipEvents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WishlistProvider>
        <RecentlyViewedProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/tees" element={<Layout><CategoryTees /></Layout>} />
          <Route path="/categories/jackets" element={<Layout><CategoryJackets /></Layout>} />
          <Route path="/categories/caps" element={<Layout><CategoryCaps /></Layout>} />
          <Route path="/categories/accessories" element={<Layout><CategoryAccessories /></Layout>} />
          <Route path="/categories/limited" element={<PlaceholderCategory categoryName="Limited Edition" />} />
          <Route path="/product/:id" element={<Layout><Product /></Layout>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<FeaturePlaceholder featureName="Notifications" description="Stay updated with order status, new arrivals, and racing news" />} />
          <Route path="/compare" element={<FeaturePlaceholder featureName="Product Compare" description="Compare features, prices, and specifications side-by-side" />} />
          <Route path="/orders" element={<FeaturePlaceholder featureName="Order History" description="Track your purchases and reorder your favorites" />} />
          <Route path="/rewards" element={<FeaturePlaceholder featureName="Pit Crew Rewards" description="Earn points and unlock exclusive racing benefits" />} />
          <Route path="/help" element={<FeaturePlaceholder featureName="Help Center" description="Get support for orders, sizing, and racing gear questions" />} />
          <Route path="/size-guide" element={<FeaturePlaceholder featureName="Racing Size Guide" description="Find your perfect fit with F1 driver measurements" />} />
          <Route path="/placeholder" element={<Layout><PlaceholderCategory categoryName="Coming Soon" /></Layout>} />
          <Route path="/gift-cards" element={<FeaturePlaceholder featureName="Gift Cards" description="Purchase digital gift cards for friends and family." />} />
          <Route path="/order-history" element={<FeaturePlaceholder featureName="Order History" description="View and manage your past orders." />} />
          <Route path="/track-orders" element={<FeaturePlaceholder featureName="Track Orders" description="Track the status of your current orders." />} />
          <Route path="/pit-crew-rewards" element={<FeaturePlaceholder featureName="Pit Crew Rewards" description="Earn points and unlock exclusive racing benefits." />} />
          <Route path="/help-center" element={<FeaturePlaceholder featureName="Help Center" description="Get support for orders, sizing, and racing gear questions." />} />
          <Route path="/shipping-info" element={<FeaturePlaceholder featureName="Shipping Info" description="Learn about shipping options, times, and costs." />} />
          <Route path="/returns" element={<FeaturePlaceholder featureName="Returns" description="Find out how to return or exchange your items." />} />
          <Route path="/contact" element={<FeaturePlaceholder featureName="Contact Us" description="Reach out to our support team for assistance." />} />
          <Route path="/live-chat" element={<FeaturePlaceholder featureName="Live Chat" description="Chat live with our support team." />} />
          <Route path="/race-results" element={<FeaturePlaceholder featureName="Race Results" description="See the latest F1 race results and standings." />} />
          <Route path="/racing-news" element={<FeaturePlaceholder featureName="Racing News" description="Stay updated with the latest F1 news and stories." />} />
          <Route path="/driver-gear" element={<FeaturePlaceholder featureName="Driver Gear" description="Shop official F1 driver merchandise and gear." />} />
          <Route path="/team-collections" element={<FeaturePlaceholder featureName="Team Collections" description="Explore collections from your favorite F1 teams." />} />
          <Route path="/vip-events" element={<FeaturePlaceholder featureName="VIP Events" description="Access exclusive VIP racing events and experiences." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
          </BrowserRouter>
        </RecentlyViewedProvider>
      </WishlistProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
