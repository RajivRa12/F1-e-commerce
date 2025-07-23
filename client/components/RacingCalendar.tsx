import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar, MapPin, Clock, Trophy, Flag, ExternalLink } from "lucide-react";

interface Race {
  id: number;
  name: string;
  circuit: string;
  country: string;
  date: string;
  time: string;
  flag: string;
  status: 'upcoming' | 'live' | 'completed';
}

const raceSchedule: Race[] = [
  {
    id: 1,
    name: "Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    country: "Bahrain",
    date: "2024-03-02",
    time: "15:00 UTC",
    flag: "🇧🇭",
    status: "completed"
  },
  {
    id: 2,
    name: "Saudi Arabian Grand Prix", 
    circuit: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    date: "2024-03-09",
    time: "17:00 UTC",
    flag: "🇸🇦",
    status: "completed"
  },
  {
    id: 3,
    name: "Australian Grand Prix",
    circuit: "Albert Park Grand Prix Circuit",
    country: "Australia", 
    date: "2024-03-24",
    time: "04:00 UTC",
    flag: "🇦🇺",
    status: "live"
  },
  {
    id: 4,
    name: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    country: "Japan",
    date: "2024-04-07",
    time: "05:00 UTC", 
    flag: "🇯🇵",
    status: "upcoming"
  },
  {
    id: 5,
    name: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    country: "China",
    date: "2024-04-21",
    time: "07:00 UTC",
    flag: "🇨🇳", 
    status: "upcoming"
  },
  {
    id: 6,
    name: "Miami Grand Prix",
    circuit: "Miami International Autodrome",
    country: "United States",
    date: "2024-05-05",
    time: "19:30 UTC",
    flag: "🇺🇸",
    status: "upcoming"
  }
];

export function RacingCalendar() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedRaces = showAll ? raceSchedule : raceSchedule.slice(0, 3);
  const nextRace = raceSchedule.find(race => race.status === 'upcoming' || race.status === 'live');

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Flag className="h-6 w-6 text-racing-red mr-2" />
          <h2 className="text-2xl font-bold text-foreground">F1 Calendar 2024</h2>
        </div>
        <Button variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          Full Schedule
        </Button>
      </div>

      {nextRace && (
        <div className="mb-6 p-4 bg-racing-red/10 border border-racing-red/20 rounded-lg">
          <div className="flex items-center mb-2">
            <Trophy className="h-5 w-5 text-racing-red mr-2" />
            <span className="text-sm font-semibold text-racing-red uppercase tracking-wide">
              {nextRace.status === 'live' ? 'LIVE NOW' : 'NEXT RACE'}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-1">{nextRace.name}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="mr-4">{nextRace.flag} {nextRace.country}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{nextRace.date} • {nextRace.time}</span>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {displayedRaces.map((race) => (
          <div 
            key={race.id} 
            className={`flex items-center justify-between p-4 rounded-lg border transition-colors hover:bg-muted/50 ${
              race.status === 'live' 
                ? 'border-racing-red/50 bg-racing-red/5' 
                : race.status === 'completed'
                ? 'border-border bg-muted/20 opacity-75'
                : 'border-border'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{race.flag}</div>
              <div>
                <h3 className="font-semibold text-foreground">{race.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{race.circuit}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{race.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                <span>{race.time}</span>
              </div>
            </div>
            
            <div className="ml-4">
              {race.status === 'live' && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-racing-red rounded-full animate-pulse mr-2" />
                  <span className="text-xs font-semibold text-racing-red uppercase">LIVE</span>
                </div>
              )}
              {race.status === 'completed' && (
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-racing-yellow mr-1" />
                  <span className="text-xs font-semibold text-racing-yellow uppercase">FINISHED</span>
                </div>
              )}
              {race.status === 'upcoming' && (
                <span className="text-xs font-semibold text-muted-foreground uppercase">Upcoming</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {raceSchedule.length > 3 && (
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className="w-full"
          >
            {showAll ? 'Show Less' : `Show All ${raceSchedule.length} Races`}
          </Button>
        </div>
      )}
      
      <div className="mt-6 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Gear up for race day with our exclusive F1 collection
        </p>
      </div>
    </div>
  );
}
