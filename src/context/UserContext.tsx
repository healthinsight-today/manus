import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserSettings } from '../types/User';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface UserContextProps {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserSettings: (settings: Partial<UserSettings>) => void;
  updateUserProfile: (profile: Partial<User['profile']>) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

// Mock user for development
const mockUser: User = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  profile: {
    age: 42,
    gender: 'Male',
    health_conditions: ['Hypertension', 'High Cholesterol'],
    avatar: '/assets/images/default-profile.png'
  },
  settings: {
    preferred_units: 'metric',
    notification_preferences: {
      email: true,
      push: true,
      sms: false,
      report_ready: true,
      insights_update: true,
      recommendations: true
    },
    theme: 'light'
  },
  created_at: '2023-01-15T08:30:00Z',
  updated_at: '2023-04-20T14:15:00Z'
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      // For now, we'll simulate a login with the mock user
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'demo@example.com' && password === 'password') {
        setUser(mockUser);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUserSettings = (settings: Partial<UserSettings>) => {
    if (!user) return;
    
    setUser({
      ...user,
      settings: {
        ...user.settings,
        ...settings
      },
      updated_at: new Date().toISOString()
    });
  };

  const updateUserProfile = (profile: Partial<User['profile']>) => {
    if (!user) return;
    
    setUser({
      ...user,
      profile: {
        ...user.profile,
        ...profile
      },
      updated_at: new Date().toISOString()
    });
  };

  // Auto-login with mock user for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !user) {
      setUser(mockUser);
    }
  }, [setUser, user]);

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    logout,
    updateUserSettings,
    updateUserProfile
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
