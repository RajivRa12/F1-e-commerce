import React, { createContext, useContext, useState, useEffect } from 'react';

interface RecentlyViewedItem {
  id: number;
  name: string;
  price: number;
  image: string;
  viewedAt: string;
}

interface RecentlyViewedContextType {
  recentlyViewed: RecentlyViewedItem[];
  addToRecentlyViewed: (item: RecentlyViewedItem) => void;
  clearRecentlyViewed: () => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

export function RecentlyViewedProvider({ children }: { children: React.ReactNode }) {
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('velocity-recently-viewed');
    if (saved) {
      setRecentlyViewed(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velocity-recently-viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = (item: RecentlyViewedItem) => {
    setRecentlyViewed(prev => {
      // Remove if already exists
      const filtered = prev.filter(existing => existing.id !== item.id);
      // Add to beginning with current timestamp
      const updated = [{ ...item, viewedAt: new Date().toISOString() }, ...filtered];
      // Keep only last 10 items
      return updated.slice(0, 10);
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
  };

  return (
    <RecentlyViewedContext.Provider value={{
      recentlyViewed,
      addToRecentlyViewed,
      clearRecentlyViewed
    }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext);
  if (context === undefined) {
    throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
  }
  return context;
}
