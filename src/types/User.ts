export interface User {
  id: string;
  name: string;
  email: string;
  profile: UserProfile;
  settings: UserSettings;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  age?: number;
  gender?: string;
  health_conditions?: string[];
  avatar?: string;
}

export interface UserSettings {
  preferred_units: 'metric' | 'imperial';
  notification_preferences: NotificationPreferences;
  theme: 'light' | 'dark' | 'system';
  dashboard_layout?: string;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  report_ready: boolean;
  insights_update: boolean;
  recommendations: boolean;
}
