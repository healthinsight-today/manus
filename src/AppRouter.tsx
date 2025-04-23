import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Pages
import Dashboard from './pages/Dashboard';
import ReportUploadPage from './pages/ReportUploadPage';
import ReportsListPage from './pages/ReportsListPage';
import ReportDetailPage from './pages/ReportDetailPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
import RecommendationsPage from './pages/RecommendationsPage';
import RecommendationDetailPage from './pages/RecommendationDetailPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

// Context Providers
import { ReportsProvider } from './context/ReportsContext';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
          <UserProvider>
            <ReportsProvider>
              <Routes>
                {/* Auth routes */}
                <Route path="/login" element={<LoginPage />} />
                
                {/* Main app routes with layout */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/upload" element={<ReportUploadPage />} />
                  <Route path="/reports" element={<ReportsListPage />} />
                  <Route path="/reports/:reportId" element={<ReportDetailPage />} />
                  <Route path="/insights" element={<InsightsPage />} />
                  <Route path="/insights/:insightId" element={<InsightDetailPage />} />
                  <Route path="/recommendations" element={<RecommendationsPage />} />
                  <Route path="/recommendations/:recommendationId" element={<RecommendationDetailPage />} />
                  <Route path="/history" element={<HistoryPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Route>
                
                {/* Fallback routes */}
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </ReportsProvider>
          </UserProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
