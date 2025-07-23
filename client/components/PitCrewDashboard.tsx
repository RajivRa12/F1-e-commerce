import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Trophy, 
  Star, 
  Gift, 
  Zap, 
  Clock, 
  Target,
  Award,
  Crown,
  Flame
} from "lucide-react";

interface Reward {
  id: number;
  title: string;
  description: string;
  points: number;
  type: 'discount' | 'freebie' | 'exclusive';
  available: boolean;
}

const rewards: Reward[] = [
  {
    id: 1,
    title: "15% Off Next Purchase",
    description: "Valid on all racing tees",
    points: 500,
    type: "discount",
    available: true
  },
  {
    id: 2,
    title: "Free Racing Sticker Pack",
    description: "Official F1 team stickers",
    points: 200,
    type: "freebie", 
    available: true
  },
  {
    id: 3,
    title: "VIP Early Access",
    description: "24h early access to new drops",
    points: 1000,
    type: "exclusive",
    available: false
  },
  {
    id: 4,
    title: "Free Express Shipping",
    description: "Next order ships in 24h",
    points: 300,
    type: "freebie",
    available: true
  }
];

export function PitCrewDashboard() {
  const [userPoints] = useState(847);
  const [tier] = useState("Rookie Driver");
  const nextTierPoints = 1000;
  const progressPercent = (userPoints / nextTierPoints) * 100;

  const getTierIcon = (tier: string) => {
    switch(tier) {
      case "Rookie Driver": return <Zap className="h-5 w-5" />;
      case "Pro Racer": return <Trophy className="h-5 w-5" />;
      case "Champion": return <Crown className="h-5 w-5" />;
      default: return <Star className="h-5 w-5" />;
    }
  };

  const getRewardIcon = (type: string) => {
    switch(type) {
      case "discount": return <Target className="h-4 w-4" />;
      case "freebie": return <Gift className="h-4 w-4" />;
      case "exclusive": return <Crown className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Trophy className="h-6 w-6 text-racing-red mr-2" />
          <h2 className="text-2xl font-bold text-foreground">Pit Crew Status</h2>
        </div>
        <Badge variant="secondary" className="bg-racing-red/10 text-racing-red border-racing-red/20">
          <Flame className="h-3 w-3 mr-1" />
          Active Member
        </Badge>
      </div>

      {/* Current Tier & Progress */}
      <div className="mb-8 p-4 bg-gradient-to-r from-racing-red/10 to-racing-yellow/10 rounded-lg border border-racing-red/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {getTierIcon(tier)}
            <span className="ml-2 text-lg font-bold text-foreground">{tier}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-racing-red">{userPoints}</div>
            <div className="text-xs text-muted-foreground">Total Points</div>
          </div>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress to Pro Racer</span>
            <span>{userPoints}/{nextTierPoints} pts</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-racing-red to-racing-yellow h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          {nextTierPoints - userPoints} points until next tier unlock
        </p>
      </div>

      {/* Recent Activity */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Clock className="h-5 w-5 mr-2 text-racing-yellow" />
          Recent Activity
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
            <span className="text-sm">Purchase: Monaco GP Tee</span>
            <span className="text-sm font-semibold text-racing-red">+45 pts</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
            <span className="text-sm">Account Creation Bonus</span>
            <span className="text-sm font-semibold text-racing-red">+100 pts</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
            <span className="text-sm">Product Review</span>
            <span className="text-sm font-semibold text-racing-red">+25 pts</span>
          </div>
        </div>
      </div>

      {/* Available Rewards */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Award className="h-5 w-5 mr-2 text-racing-yellow" />
          Available Rewards
        </h3>
        <div className="space-y-3">
          {rewards.map((reward) => (
            <div 
              key={reward.id}
              className={`p-4 rounded-lg border transition-all ${
                reward.available && userPoints >= reward.points
                  ? 'border-racing-red/50 bg-racing-red/5 hover:bg-racing-red/10'
                  : 'border-border bg-muted/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    reward.type === 'discount' ? 'bg-blue-500/10 text-blue-500' :
                    reward.type === 'freebie' ? 'bg-green-500/10 text-green-500' :
                    'bg-purple-500/10 text-purple-500'
                  }`}>
                    {getRewardIcon(reward.type)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{reward.title}</h4>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                    <div className="flex items-center mt-2">
                      <Star className="h-3 w-3 text-racing-yellow mr-1" />
                      <span className="text-sm font-medium">{reward.points} points</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  size="sm"
                  variant={reward.available && userPoints >= reward.points ? "default" : "outline"}
                  disabled={!reward.available || userPoints < reward.points}
                  className={reward.available && userPoints >= reward.points ? "bg-racing-red hover:bg-racing-red/90" : ""}
                >
                  {!reward.available ? "Locked" : 
                   userPoints < reward.points ? "Not Enough" : "Redeem"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border text-center">
        <p className="text-xs text-muted-foreground mb-2">
          Earn points with every purchase, review, and referral
        </p>
        <Button variant="outline" size="sm">
          Learn How to Earn More Points
        </Button>
      </div>
    </div>
  );
}
