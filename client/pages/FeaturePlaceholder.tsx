import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturePlaceholderProps {
  featureName: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeaturePlaceholder({ 
  featureName, 
  description, 
  icon = <Zap className="h-8 w-8" /> 
}: FeaturePlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="flex justify-center mb-6 text-racing-red">
            {icon}
          </div>
          
          <div>
            <h1 className="text-3xl font-black text-foreground mb-4">
              {featureName}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>
            
            <div className="bg-racing-red/10 border border-racing-red/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-racing-red font-semibold mb-2">
                Coming Soon to Velocity Racing
              </p>
              <p className="text-xs text-muted-foreground">
                This feature is part of our roadmap to create the ultimate F1 streetwear experience.
              </p>
            </div>
            
            <div className="space-y-4">
              <Link to="/dashboard">
                <Button size="lg" className="w-full bg-racing-red hover:bg-racing-red/90">
                  <Settings className="mr-2 h-5 w-5" />
                  Go to Dashboard
                </Button>
              </Link>
              
              <Link to="/">
                <Button variant="outline" size="lg" className="w-full">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border">
            <h3 className="text-sm font-semibold mb-2">What's Available Now:</h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div>• Product Catalog</div>
              <div>• Shopping Cart</div>
              <div>• Wishlist System</div>
              <div>• F1 Calendar</div>
              <div>• Pit Crew Rewards</div>
              <div>• User Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
